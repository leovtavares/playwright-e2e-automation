[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# Client: Luxury Store (Resale E-commerce)

Welcome to the specific testing directory for a hypothetical **Luxury Resale E-commerce**. This project demonstrates my proficiency in handling complex business logic, concurrency issues, and building robust test architecture from scratch.

## Critical Thinking & Testing Strategy
Unlike traditional e-commerce platforms, luxury resale presents unique engineering challenges. I mapped the entire flow focusing on the highest risk areas:
1. **Unitary Inventory (Concurrency):** Every item is a unique 1-of-1 piece (e.g., a specific vintage bag). A critical edge case is when two concurrent users attempt to buy the same item. The system must lock the stock and return a 409 Conflict to the second user.
2. **Quality of the "Golden Path":** Because the average ticket size is extremely high, any bugs in the checkout or authentication funnel generate massive financial loss. 

## Project Structure

- `/docs`: Contains the "QA Mindset" artifacts.
  - `0_test_plan.md`: Comprehensive Test Strategy and Risk Matrix.
  - `1_exploratory_mindmap.md`: Heuristics and system architecture mapping.
  - `2_bdd_test_cases.md`: Executable Gherkin scenarios (Cart and Authentication rules).
  - `3_bug_report_template.md`: Corporate defect reporting standard.
  - `4_api_postman_strategy.md`: Network inspection and backend validation strategy.
- `/e2e`: UI Automation Scripts using **Playwright** (TypeScript).
  - `checkout.spec.ts`: An end-to-end script that mocks the backend to force and validate the "item already reserved" concurrency error on the UI.
- `/api`: Backend Automation using **Postman**.
  - `Cart_API_Collection.json`: A Newman-ready collection with JavaScript assertions ensuring the API correctly handles HTTP 409 Conflicts during simultaneous cart additions.

<br><br>

<a id="português"></a>
# Cliente: Luxury Store (E-commerce de Resale)

Bem-vindo ao diretório de testes de um **E-commerce de Luxo (Seminovos)** hipotético. Este projeto demonstra minha proficiência em lidar com regras de negócio complexas, problemas de concorrência e a construção de uma arquitetura de testes robusta do zero.

## Pensamento Crítico e Estratégia de Teste
Diferente do e-commerce tradicional, o resale de luxo apresenta desafios únicos de engenharia. Mapeei todo o fluxo focando nas áreas de maior risco:
1. **Estoque Unitário (Concorrência):** Cada item é uma peça única (1 de 1). O caso limite crítico ocorre quando dois usuários simultâneos tentam comprar o mesmo item. O sistema deve travar o estoque e retornar um Erro 409 Conflict para o segundo usuário.
2. **Qualidade da "Jornada de Ouro":** Como o ticket médio é extremamente alto, qualquer bug no funil de checkout ou autenticação gera perdas financeiras maciças.

## Estrutura do Projeto

- `/docs`: Contém os artefatos do "Mindset de QA".
  - `0_test_plan.md`: Estratégia Abrangente e Matriz de Riscos.
  - `1_exploratory_mindmap.md`: Mapeamento de heurísticas e arquitetura sistêmica.
  - `2_bdd_test_cases.md`: Cenários executáveis em Gherkin (Regras de Carrinho e Autenticação).
  - `3_bug_report_template.md`: Padrão corporativo de reporte de defeitos.
  - `4_api_postman_strategy.md`: Inspeção de rede e estratégia de validação de backend.
- `/e2e`: Scripts de Automação de UI usando **Playwright** (TypeScript).
  - `checkout.spec.ts`: Um script end-to-end que mocka o backend para forçar e validar se a UI exibe a falha de concorrência "item já reservado".
- `/api`: Automação de Backend usando **Postman**.
  - `Cart_API_Collection.json`: Uma coleção pronta para Newman, contendo validações em JavaScript para garantir que a API lide corretamente com conflitos HTTP 409 durante adições simultâneas ao carrinho.
