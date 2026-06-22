# 3. Reporte de Bug Padrão-Ouro

A descrição da vaga pontua explicitamente: *"Abrir bugs com clareza, contexto e passos para reprodução"*. O documento abaixo é uma demonstração de como um analista crítico não apenas abre um "ticket" apontando um erro, mas sim fornece todo o contexto técnico para que o Desenvolvedor consiga reproduzir e corrigir sem precisar fazer reuniões adicionais.

---

## 🐛 [Bug] Quebra de Layout e Erro de Validação no Input de CEP no Carrinho

**ID:** BUG-402
**Status:** Aberto
**Prioridade:** Alta (Impede fluxo de compra/UX ruim no Cart)
**Severidade:** Major
**Módulo:** Carrinho / API de Logística

### 📝 Descrição
Ao inserir um CEP com caracteres especiais não padronizados (ex: "01001#000") no campo de cálculo de frete na página do Carrinho, o sistema permite a requisição, o servidor retorna erro 500 e o layout do box de cálculo "quebra" (botão sai do alinhamento), não fornecendo um feedback adequado para o cliente corrigir o dado.

### ⚙️ Ambiente
- **OS:** Windows 11 / iOS 17.2
- **Browser:** Google Chrome (v121.0) / Safari Mobile
- **URL:** `www.[lojadeluxo].com.br/cart`
- **Conta de Teste:** `qa.teste@exemplo.com`

### 👣 Passos para Reproduzir
1. Acesse o site e adicione qualquer item disponível ao carrinho.
2. Navegue até a página do Carrinho (`/cart`).
3. No campo "Calcule seu Frete", insira o valor: `01001#000` (inserção de caracter especial `#`).
4. Clique em "Calcular".

### ❌ Resultado Atual
- O botão fica em estado de "loading" infinito no Front-End.
- Ao abrir o console (F12), a API `/api/v1/shipping/calculate` retorna **Status 500 Internal Server Error**.
- A div que contém o input perde a formatação CSS (overflow do padding), quebrando a estética do box.
- Nenhuma mensagem de erro amigável é exibida ao usuário (ex: "CEP em formato inválido").

### ✅ Resultado Esperado
- O input deve conter uma máscara (mask) nativa no Front-End que impeça a digitação de caracteres que não sejam números.
- Caso o dado inválido chegue na API, o backend deve retornar um **Status 400 Bad Request**.
- O Front-End deve capturar o 400 e exibir uma mensagem vermelha abaixo do campo: "Por favor, insira um CEP válido contendo apenas números."

### 📎 Evidências
*(Em um cenário real, aqui entraria um link do Loom gravando a quebra de layout e um print da aba Network)*
- `[Screenshot_Network_500.png]`
- `[Video_Layout_Break_iOS.mp4]`

### 💡 Observações do QA
A falha parece ocorrer porque não há validação no lado do cliente (Front-End via regex) antes de disparar o payload para o serviço parceiro de Correios/Transportadora. Implementar a máscara resolveria o problema visual e pouparia requisições desnecessárias ao servidor.
