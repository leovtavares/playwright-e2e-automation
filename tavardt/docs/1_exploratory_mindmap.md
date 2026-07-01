# Exploratory Testing Charter (SBTM) - TAVARDT

**Session:** Localization & Lead Capture Integrity
**Tester:** QA Engineer
**Duration:** 90 minutos (Uninterrupted)
**Mission:** Explorar o roteamento dinâmico de idiomas e o funil de contato, buscando falhas silenciosas que possam custar a perda de leads qualificados (B2B).

## Heurísticas e Mindmap Exploratório

Abaixo está o mapa mental estratégico utilizado durante a sessão de testes exploratórios baseados em risco:

```mermaid
mindmap
  root((Tavardt.com))
    (Localization / Redirection)
      Browser Locale
        PT-BR e PT-PT
        EN-US e EN-GB
        ES, FR, IT
        Idiomas nao suportados (Fallback EN)
      Cookies / Cache
        Troca manual via UI (persistência)
        Retorno após limpar cache
      Edge Cases
        Acesso via VPN (IP mismatch)
        Navegação anônima
    (Contact Form)
      Input Validation
        E-mails inválidos (@teste sem domínio, etc)
        XSS básico em campos de texto
        Campos obrigatórios em branco
      Network & API
        Status Code retornado (200, 4xx, 5xx)
        Payload enviado (JSON malformado)
        Desempenho (Timeout do servidor)
      User Experience
        Feedback visual de sucesso/erro
        Duplo clique no botão "Enviar" (Rate Limiting)
```

## Notas da Sessão (Session Notes)

- **Áreas de Risco Elevado:** O redirecionamento de idiomas ocorre na montagem inicial do lado do cliente (Client-side rendering). Um erro no parsing do cabeçalho `Accept-Language` ou `navigator.language` resulta numa página em branco ou na língua errada, causando rejeição imediata do lead internacional.
- **Falha de UX Encontrada durante a Exploração:** Tentar enviar o formulário com a rede instável não apresentou um *spinner* de loading claro nas primeiras iterações (posteriormente mapeado para automação).
- **Decisão Técnica:** A validação do formulário deve focar não apenas na UI vermelha/verde, mas na escuta do Web Traffic (`api/contact`) para garantir que o *backend* validou a requisição.
