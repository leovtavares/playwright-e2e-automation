# Jira: CPT-9045

**Título:** Loading infinito em /explore-careers/job-roles (Falha sistêmica no React Server Components)  
**Tipo de Issue:** Defeito (Bug)  
**Prioridade:** P1 - Altíssima  
**Severidade:** S1 - Blocker  
**Componente:** `frontend-web`, `nextjs-router`, `api-gateway`  
**Atribuído para:** Não atribuído  
**Reportado por:** L. Tavares  
**Status:** TO DO  

---

## Descrição
O componente de grade (Grid) de Carreiras (Job Roles) falha ao renderizar, travando a interface permanentemente em um estado de carregamento (spinner vermelho pela metade). A falha ocorre devido a um loop de abortos nas requisições Next.js RSC (React Server Components), bloqueando totalmente a navegação e a descoberta de carreiras pelos usuários no funil principal.

## Passos para Reproduzir
1. Acesse o ambiente de produção em: `https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all`
2. Aguarde a conclusão da hidratação inicial do React.
3. Observe o local onde as vagas deveriam ser listadas (abaixo dos botões de filtro "All, Digital Foundations, AI...").

## Resultado Esperado
O spinner de carregamento deve ser desmontado assim que o payload da API for resolvido, e o componente `<JobRoleGrid />` deve renderizar os cards das vagas corretamente.

## Resultado Atual
A UI fica bloqueada permanentemente com o spinner. A lista nunca é renderizada.

## Contexto Técnico / Investigação de Causa Raiz (RCA)
- **Ambiente:** Produção (`v2.4.1`)
- **Navegador (Testado Automático):** HeadlessChrome v149 / Windows 11
- **Investigação via DevTools (Network/Console):**
  - O front-end (Next.js) entra em uma condição de falha onde os pacotes `.rsc` são solicitados e imediatamente abortados pelo cliente.
  - A requisição `https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all&_rsc=rGDD_YnMgphwk2iS` sofre múltiplos **net::ERR_ABORTED**.
  - O Network tab aponta que algumas requisições paralelas retornaram **Status 403 Forbidden** (Possível bloqueio de WAF/Cloudflare interferindo no ciclo de hidratação e causando pânico no Next.js router).
  - O sistema falha em acionar um `Error Boundary`, preferindo travar silenciosamente no estado `isFetching=true`.

**Dump do Log de Rede (Capturado via Playwright):**
```json
[
  {
    "url": "https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all&_rsc=rGDD_YnMgphwk2iS",
    "error": "net::ERR_ABORTED"
  },
  {
    "url": "https://www.comptia.org/en-us/contact-us/?_rsc=D23pDF2KbseT4Qxn",
    "status": 403
  }
]
```

## Sugestão de Fix
1. Investigar as regras do WAF que estão estourando 403.
2. Implementar um `try/catch` no client-side router ou envolver o componente suspirado com um `ErrorBoundary` para garantir que, caso os chunks do RSC falhem em carregar, o usuário veja uma mensagem de erro ("Não foi possível carregar as carreiras"), em vez de um loading infinito.

## Anexos
- `infinite_loading_screenshot.png` (Anexado via Jira UI - capturado em 30/06/2026)
