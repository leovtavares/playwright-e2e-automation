# Jira: PST-2044

**Título:** Optimistic UI False Positive - Dados do Perfil não persistem apesar do Toast de Sucesso  
**Tipo de Issue:** Defeito (Bug)  
**Prioridade:** P1 - Altíssima  
**Severidade:** S2 - Major (Perda de integridade de dados do usuário)  
**Componente:** `identity-web`, `api-proxy`  
**Atribuído para:** Não atribuído  
**Reportado por:** L. Tavares  
**Status:** TO DO  

---

## Descrição
Ao editar as informações do perfil (Bio e Website) na página `settings/me` e clicar em "Update Profile", o sistema exibe o balão verde de notificação "Success: Updated your user profile". No entanto, o sistema sofre de uma falha de **Falso Positivo / Optimistic UI**. Ao sair da página e retornar (ou recarregar a tela), os campos de formulário estão completamente vazios. O usuário é levado a acreditar que seus dados foram salvos, mas houve uma falha silenciosa na gravação.

## Passos para Reproduzir
1. Acesse o ambiente logado: `https://web.postman.co/settings/me`.
2. Role a tela até "Tell people more about you".
3. Insira um texto no campo **Bio** (ex: "Junior Software Test Analyst (QA)").
4. Clique no botão laranja **Update Profile**.
5. Observe o *Toast* de sucesso verde confirmando a ação no canto inferior.
6. Atualize a página da web (F5).
7. Verifique o campo Bio.

## Resultado Esperado
Os campos preenchidos devem persistir e reaparecer exatamente como digitados após qualquer recarregamento da sessão, comprovando a gravação no banco de dados.

## Resultado Atual
Os campos retornam ao estado vazio (Branco). O sistema ignora a mutação sem avisar o usuário do erro real.

## Contexto Técnico / Investigação de Causa Raiz (RCA)
- **Ambiente:** Produção (v11.1.0)
- **Investigação via DevTools (Network):**
  - O Postman não dispara um PUT direto para um microsserviço de usuários. Ele trafega um payload RPC/Mutação via POST para `https://web.postman.co/_api/ws/proxy`.
  - Quando clicamos em salvar, o Request é feito com os dados. O backend responde com HTTP `200 OK` e um payload indicando sucesso genérico:
    `{"result":"success","data":{"entityType":"user","entityId":"15164239"...}}`
  - A interface de usuário (React) lê a chave `"result":"success"` e instantaneamente engatilha a notificação.
  - **A Falha:** O proxy retorna 200 OK porque a requisição de roteamento não falhou, mas a transação interna do banco de dados (User Entity) possivelmente falhou por regras de negócio (formatação da bio, cache distribuído dessincronizado). O Front-end assume ingenuamente o status 200 do proxy como validação de dados de negócio, criando a dissonância cognitiva na UX.

**Dump do Log de Rede (Capturado na Auditoria):**
```json
{
  "url": "https://web.postman.co/_api/ws/proxy",
  "method": "POST",
  "status": 200,
  "body": "{\"result\":\"success\",\"data\":{\"entityType\":\"user\",\"entityId\":\"15164239\",\"features\":{...}}}"
}
```

## Sugestão de Fix
1. Modificar o contrato do `_api/ws/proxy` para retornar falhas de negócio aninhadas dentro do payload, em vez de um `"result":"success"` genérico.
2. Interceptar a resposta no Redux/Context do front-end e invalidar o cache local, forçando um novo GET (Fetch) do perfil assim que o Update ocorrer. Se o GET retornar vazio, a UI deve reverter a alteração local (Optimistic UI rollback) e exibir um toast vermelho de erro ("Failed to persist data").

## Anexos
- `postman_profile_bug_before.png` (Tela de sucesso falso)
- `postman_profile_bug_after.png` (Tela recarregada em branco)
