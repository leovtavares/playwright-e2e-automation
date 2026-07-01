# Casos de Teste (Test Cases) - TAVARDT

Abaixo estão descritos os cenários de teste mapeados para a plataforma `ag.tavardt.com`, categorizados por funcionalidade.

---

## Módulo: Redirecionamento de Idioma (Localization)

### CT-001: Redirecionamento Automático para Português (Brasil)
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `pt-BR`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em português do Brasil https://ag.tavardt.com/br. Textos principais devem aparecer em português (ex: "Contato", "Sobre").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

### CT-002: Redirecionamento Automático para Português (Portugal)
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `pt`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em português de Portugal https://ag.tavardt.com/pt. Textos principais devem aparecer em português (ex: "Contacto", "Sobre").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

### CT-003: Redirecionamento Automático para Espanhol
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `es`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em espanhol https://ag.tavardt.com/es. Textos principais devem aparecer em espanhol (ex: "Contacto", "Sobre Nosotros").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

### CT-004: Redirecionamento Automático para Francês
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `fr`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em francês https://ag.tavardt.com/fr. Textos principais devem aparecer em francês (ex: "Contact", "A Propos").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

### CT-005: Redirecionamento Automático para Italiano
- **Pré-condições:** O idioma padrão do navegador deve estar configurado para `it`.
- **Passos para Reproduzir:**
  1. Acessar a URL raiz `https://ag.tavardt.com`.
  2. Aguardar o carregamento da página.
- **Resultado Esperado:** O usuário deve ser direcionado para a versão em italiano https://ag.tavardt.com/it. Textos principais devem aparecer em português (ex: "Contatti", "Chi Siamo").
- **Prioridade:** Alta
- **Tipo:** Caminho Feliz

---

## Módulo: Formulário de Contato

### CT-006: Submissão do Formulário com Sucesso (Caminho Feliz)
- **Pré-condições:** Estar na página que contém o formulário de contato (ag.tavardt.com/br/contato).
- **Passos para Reproduzir:**
  1. Preencher o campo "Nome Completo" com dados válidos (ex: "João Silva").
  2. Preencher o campo "E-mail Profissional" com um e-mail válido (ex: "teste@teste.com").
  3. Preencher o campo "Empresa" com dados válidos (ex: "Google").
  4. Selecionar a opção "Serviço de Interesse" no menu dropdown (ex: "Todos / Outros").
  5. Preencher o campo "Descreva seu Desafio" com um texto de teste.
  6. Clicar no botão de Enviar Mensagem.
- **Resultado Esperado:** A aplicação deve exibir uma mensagem de sucesso ("Mensagem enviada", "Sucesso" ou redirecionamento de agradecimento). O payload no painel de rede (Network) deve retornar HTTP 200/201.
- **Prioridade:** Máxima
- **Tipo:** Caminho Feliz

### CT-007: Tentativa de Submissão com Campos Vazios
- **Pré-condições:** Estar na página que contém o formulário de contato (ag.tavardt.com/br/contato).
- **Passos para Reproduzir:**
  1. Deixar todos os campos do formulário vazios.
  2. Clicar no botão de Enviar Mensagem.
- **Resultado Esperado:** O envio deve ser bloqueado pelo frontend. Mensagens de validação visual ("Campo obrigatório") devem aparecer junto aos campos necessários. Nenhuma requisição HTTP POST deve ser disparada.
- **Prioridade:** Alta
- **Tipo:** Cenário Negativo

### CT-008: Tentativa de Submissão com Formato de E-mail Inválido
- **Pré-condições:** Estar na página que contém o formulário de contato (ag.tavardt.com/br/contato).
- **Passos para Reproduzir:**
  1. Preencher o campo "Nome Completo" com "Teste QA".
  2. Preencher o campo "E-mail Profissional" com formato incorreto (ex: `testesemarroba.com` ou `teste@dominio`).
  3. Preencher o campo "Empresa" com dados válidos (ex: "Google").
  4. Selecionar a opção "Serviço de Interesse" no menu dropdown (ex: "Todos / Outros").
  5. Preencher o campo "Descreva seu Desafio" com um texto de teste.
  6. Clicar no botão de Enviar Mensagem.
- **Resultado Esperado:** O envio deve ser bloqueado e um erro informando formato de e-mail inválido deve ser exibido.
- **Prioridade:** Média
- **Tipo:** Edge Case / Validação de Input
