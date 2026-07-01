# Confluence: Documento de Estratégia de Testes

**Épico:** `PST-102: User Profile Settings & Identity`  
**Status:** Em Andamento  
**Autor:** Equipe de Engenharia de QA  

---

## 1. Definição de Escopo

### 1.1 Funcionalidades Dentro do Escopo
- Alteração e persistência de campos de texto (Name, Username, Bio, Website, Twitter, GitHub).
- Comportamento de feedback visual (Toasts de Sucesso/Erro).
- Interações de rede via WebSockets Proxy (`_api/ws/proxy`).

### 1.2 Fora do Escopo
- Upload de Avatar da Conta.
- Fluxo de SSO / Troca de Senha.
- API Keys generation.

## 2. Abordagem de Testes

### 2.1 Testes de Integração e Persistência
Validar não apenas se a UI aceita os dados, mas se há um vínculo direto entre a resposta HTTP `200 OK` do backend e a gravação real no banco de dados.

### 2.2 Testes de Mutação (Data Integrity)
Injetar cargas de texto longas (Bio com 140+ caracteres) ou formatações HTML para verificar a sanitização e as respostas HTTP `422 Unprocessable Entity`, validando como o Front-end lida com falhas de schema.

## 3. Matriz de Rastreabilidade de Requisitos (RTM)

| ID do Req | História Jira | Descrição | Testes Associados |
| :--- | :--- | :--- | :--- |
| REQ-01 | PST-103 | O sistema deve persistir alterações no perfil de forma síncrona | PST-TC-001 |
| REQ-02 | PST-104 | A interface deve apresentar falha se o backend rejeitar o payload | PST-TC-002 |
| REQ-03 | PST-105 | O cache local do navegador deve ser invalidado após update | PST-TC-003 |
