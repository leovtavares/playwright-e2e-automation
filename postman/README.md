[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# Client: Postman (web.postman.co)

Welcome to the specific testing directory for the **Postman Web** application. This project demonstrates my expertise in auditing authenticated environments, intercepting network payloads, and identifying deceptive UX flaws.

## Critical Thinking & Testing Strategy
When testing the Identity & Profile module (`/settings/me`), I bypassed the login screen via automation (injecting secure session cookies) to intercept the real-time WebSocket proxy (`_api/ws/proxy`). I uncovered a critical Data Integrity defect:
1. **Optimistic UI (False Positive):** The frontend displays a green "Success" toast immediately upon receiving an HTTP 200 from the routing proxy, even if the actual database mutation fails silently or the cache is completely desynced.
2. **The Danger of Truthful Feedback:** When users refresh the page, their sensitive data (Bio, Website) simply vanishes. This breaks user trust and is a textbook example of why QAs must test the persistence layer, not just visual confirmations.

## Project Structure

- `/docs`: Contains the "QA Mindset" artifacts.
  - `0_test_plan.md`: Identity Module Test Strategy.
  - `1_exploratory_mindmap.md`: SBTM Exploratory Session on input boundaries.
  - `2_bdd_test_cases.md`: Zephyr-style Execution Matrix.
  - `3_bug_report.md`: Professional Jira Defect Report (PST-2044) with extracted API payloads.
- `/e2e`: UI Automation Scripts using **Playwright** (TypeScript).
  - `optimistic_ui_pst2044.spec.ts`: A robust script that injects environment variables (`.env`) for session management, intercepts the websocket proxy, and reloads the page to mathematically prove the Optimistic UI failure.
- `/api`: Backend Automation using **Postman**.
  - `Proxy_API_Collection.json`: A Newman-ready collection to validate the internal WebSocket proxy endpoints and their responses.

<br><br>

<a id="português"></a>
# Cliente: Postman (web.postman.co)

Bem-vindo ao diretório de testes da aplicação **Postman Web**. Este projeto demonstra minha expertise em auditar ambientes autenticados, interceptar tráfego de rede e identificar falhas enganosas de UX.

## Pensamento Crítico e Estratégia de Teste
Ao testar o módulo de Identidade e Perfil (`/settings/me`), ultrapassei a tela de login via automação (injetando cookies seguros de sessão) para interceptar o proxy WebSocket em tempo real (`_api/ws/proxy`). Descobri um defeito crítico de Integridade de Dados:
1. **Optimistic UI (Falso Positivo):** O front-end exibe um balão verde de "Sucesso" imediatamente após receber um HTTP 200 do proxy de roteamento, mesmo que a mutação real no banco de dados falhe silenciosamente ou o cache esteja dessincronizado.
2. **O Perigo do Feedback Mentiroso:** Quando os usuários recarregam a página, seus dados sensíveis (Bio, Site) simplesmente somem. Isso quebra a confiança do usuário e é um exemplo clássico de por que o QA deve testar a camada de persistência, não apenas as confirmações visuais.

## Estrutura do Projeto

- `/docs`: Contém os artefatos do "Mindset de QA".
  - `0_test_plan.md`: Estratégia de Testes do Módulo de Perfil.
  - `1_exploratory_mindmap.md`: Sessão SBTM focada em limites de inputs.
  - `2_bdd_test_cases.md`: Matriz de Execução (Zephyr).
  - `3_bug_report.md`: Reporte profissional de defeito no Jira (PST-2044) detalhando o tráfego de rede.
- `/e2e`: Scripts de Automação de UI usando **Playwright** (TypeScript).
  - `optimistic_ui_pst2044.spec.ts`: Um script robusto que utiliza variáveis de ambiente (`.env`) para gerenciar sessões secretas, intercepta o websocket proxy, e recarrega a página para provar matematicamente a falha de *Optimistic UI*.
- `/api`: Automação de Backend usando **Postman**.
  - `Proxy_API_Collection.json`: Coleção pronta para Newman visando validar a resposta do proxy WebSocket e regras de autorização interna.
