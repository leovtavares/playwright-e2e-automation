# Case de Testes QA: E-commerce de Luxo (Peças Únicas)

Este diretório contém um **Estudo de Caso de Quality Assurance** focado em um e-commerce de artigos de luxo seminovos. O objetivo deste portfólio é demonstrar proficiência nas habilidades essenciais de análise de qualidade, com foco em:

- Validação de regras de negócio complexas (estoque unitário e curadoria).
- Testes exploratórios e mapeamento de fluxos reais.
- Criação de cenários BDD baseados em comportamento, incluindo autenticação.
- Estratégia de testes de API e reporte técnico de falhas.

## Contexto do Negócio

Diferente de um e-commerce tradicional, plataformas de resale de luxo possuem características únicas que impactam diretamente a engenharia de qualidade:
1. **Estoque Unitário (1 peça):** Cada item é único. Problemas de concorrência (duas pessoas comprando o mesmo item) são críticos.
2. **Curadoria e Autenticidade:** O valor da plataforma está na garantia de que a peça é original e no seu estado de conservação. Os filtros e descrições precisam ser infalíveis.
3. **Alto Ticket Médio:** Bugs no fluxo de pagamento e autenticação geram alta frustração e perda financeira significativa.

## Estrutura do Estudo de Caso

Os artefatos deste case foram divididos para cobrir as principais etapas do ciclo de vida de testes de software:

0. [**Plano de Testes**](0_test_plan.md): Escopo, estratégia, ambientes e matriz de riscos do ciclo de QA.
1. [**Mapa Mental Exploratório**](1_exploratory_mindmap.md): Visão sistêmica da arquitetura de testes e heurísticas aplicadas.
2. [**Casos de Teste em BDD**](2_bdd_test_cases.md): Transformação de regras de negócio (filtros de condição, carrinho e autenticação) em cenários executáveis Gherkin.
3. [**Template de Bug Report**](3_bug_report_template.md): Padrão corporativo de documentação de falhas para facilitar o trabalho dos desenvolvedores.
4. [**Estratégia de API (Postman)**](4_api_postman_strategy.md): Inspeção de rede e montagem de requests para validação de integrações e backend.

---
*Construído com foco em qualidade de produto, segurança e alinhamento às regras de negócio corporativas.*

> **Nota de Gestão de Testes:** Na prática corporativa diária, a rastreabilidade destes artefatos (cenários BDD e relatórios de bugs) seria gerida de ponta a ponta utilizando ferramentas de mercado focadas em QA, como Jira (integrado ao Zephyr/Xray) ou TestRail, garantindo visibilidade centralizada para toda a equipe ágil.

## 🚀 Visão de Futuro: Automação e Pirâmide de Testes
Embora o foco inicial deste case seja em testes funcionais, exploratórios e de API, a evolução natural do produto prevê a introdução de automação. Essa evolução seguirá o conceito da **Pirâmide de Testes** para garantir sustentabilidade:
- **Base (Unitário/Integração):** Garantir que regras críticas (cálculo de descontos Pix/Cartão, bloqueio de estoque = 1) sejam cobertas por testes rápidos e isolados no backend.
- **Topo (End-to-End / UI):** Reservar os testes de interface automatizados apenas para as jornadas críticas que trazem receita (Fluxo de Checkout e Login), evitando testes frágeis (flaky tests) e garantindo um pipeline de CI/CD eficiente.
