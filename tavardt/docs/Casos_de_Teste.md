# Casos de Teste (Test Cases) - TAVARDT

Abaixo estão descritos os cenários de teste mapeados para a plataforma `ag.tavardt.com`, categorizados por funcionalidade.

---

## Módulo: Redirecionamento de Idioma (Localization)

### CT-001: Redirecionamento Automático para Português (Brasil)
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `pt-BR`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em português. Textos principais devem aparecer em português (ex: "Contato", "Serviços").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

### CT-002: Redirecionamento Automático para Inglês (EUA)
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `en-US`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado ou visualizar a página na versão em inglês. Textos principais devem aparecer em inglês (ex: "Contact", "Services").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

---

## Módulo: Formulário de Contato

### CT-003: Submissão do Formulário com Sucesso (Caminho Feliz)
- **Pré-condições:** Estar na página que contém o formulário de contato.
- **Passos para Reproduzir:**
  1. Preencher o campo "Nome" com dados válidos (ex: "João Silva").
  2. Preencher o campo "Email" com um e-mail válido (ex: "teste@teste.com").
  3. Preencher a "Mensagem" com um texto de teste.
  4. Clicar no botão de Enviar.
- **Resultado Esperado:** A aplicação deve exibir uma mensagem de sucesso ("Mensagem enviada", "Sucesso" ou redirecionamento de agradecimento). O payload no painel de rede (Network) deve retornar HTTP 200/201.
- **Prioridade:** Máxima
- **Tipo:** Caminho Feliz

### CT-004: Tentativa de Submissão com Campos Vazios
- **Pré-condições:** Estar na página que contém o formulário de contato.
- **Passos para Reproduzir:**
  1. Deixar todos os campos do formulário vazios.
  2. Clicar no botão de Enviar.
- **Resultado Esperado:** O envio deve ser bloqueado pelo frontend. Mensagens de validação visual ("Campo obrigatório") devem aparecer junto aos campos necessários. Nenhuma requisição HTTP POST deve ser disparada.
- **Prioridade:** Alta
- **Tipo:** Cenário Negativo

### CT-005: Tentativa de Submissão com Formato de E-mail Inválido
- **Pré-condições:** Estar na página que contém o formulário de contato.
- **Passos para Reproduzir:**
  1. Preencher o campo "Nome" com "Teste QA".
  2. Preencher o campo "Email" com formato incorreto (ex: `testesemarroba.com` ou `teste@dominio`).
  3. Preencher a "Mensagem".
  4. Clicar no botão de Enviar.
- **Resultado Esperado:** O envio deve ser bloqueado e um erro informando formato de e-mail inválido deve ser exibido.
- **Prioridade:** Média
- **Tipo:** Edge Case / Validação de Input
