[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# Client: CompTIA (comptia.org)

Welcome to the specific testing directory for the **CompTIA** public portal. This project demonstrates my ability to audit production environments and isolate critical user acquisition blockers.

## Critical Thinking & Testing Strategy
When exploring `comptia.org`, I focused on the core conversion funnel: the "Explore Careers" module. I discovered a high-severity bug (P1/S1) that completely breaks the user experience:
1. **Infinite Loading (Spinner Stuck):** When attempting to filter Job Roles, the React Server Components fail to hydrate the response or trigger a timeout, leaving the user with an eternal loading spinner. 
2. **"Grey Box" Diagnosis:** Even without backend access, I applied a QA engineering mindset to determine that the UI wasn't merely "broken," but that the application was failing to handle edge cases in API timeouts.

## Project Structure

- `/docs`: Contains the "QA Mindset" artifacts.
  - `0_test_plan.md`: Production Audit Test Strategy.
  - `1_exploratory_mindmap.md`: SBTM Session Charter for boundary testing.
  - `2_bdd_test_cases.md`: Zephyr-style Execution Matrix.
  - `3_bug_report.md`: Professional Jira Defect Report (CPT-9045).
- `/e2e`: UI Automation Scripts using **Playwright** (TypeScript).
  - `bug_regression_cpt9045.spec.ts`: An automated regression test designed to fail if the infinite spinner bug persists, validating correct timeout handling.

<br><br>

<a id="português"></a>
# Cliente: CompTIA (comptia.org)

Bem-vindo ao diretório de testes do portal público da **CompTIA**. Este projeto demonstra minha habilidade em auditar ambientes de produção e isolar bloqueadores críticos de aquisição de usuários.

## Pensamento Crítico e Estratégia de Teste
Ao explorar o `comptia.org`, foquei no funil principal de conversão: o módulo "Explore Careers". Descobri um bug de altíssima severidade (P1/S1) que quebra completamente a experiência do usuário:
1. **Carregamento Infinito (Spinner Stuck):** Ao tentar filtrar Vagas (Job Roles), o React Server Components falha em renderizar a resposta ou disparar um timeout, deixando o usuário preso num *loading* eterno.
2. **Diagnóstico "Caixa Cinza":** Mesmo sem acesso ao backend, apliquei o mindset de Engenharia de QA para diagnosticar que a UI não estava apenas "quebrada", mas que a aplicação estava falhando em lidar com exceções de timeout de rede.

## Estrutura do Projeto

- `/docs`: Contém os artefatos do "Mindset de QA".
  - `0_test_plan.md`: Estratégia de Auditoria em Produção.
  - `1_exploratory_mindmap.md`: Charter de Sessão SBTM para testes de limite.
  - `2_bdd_test_cases.md`: Matriz de Execução (Zephyr).
  - `3_bug_report.md`: Reporte profissional de defeito no Jira (CPT-9045).
- `/e2e`: Scripts de Automação de UI usando **Playwright** (TypeScript).
  - `bug_regression_cpt9045.spec.ts`: Um teste automatizado de regressão desenhado para falhar caso o bug do spinner infinito ocorra, validando o tratamento correto de timeouts.
