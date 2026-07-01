# Case de Testes QA: Auditoria de Produção (Bug Hunting)

Este diretório (`portfolio-qa/comptia`) contém um **Estudo de Caso de Quality Assurance (Bug Hunting)**, focado em auditar um ambiente de produção real de uma organização global, a **CompTIA**.

Diferente de cenários teóricos, o objetivo aqui é demonstrar um olhar clínico e proatividade técnica aplicados a aplicações que já estão no ar, simulando um reporte de falha como se eu integrasse a equipe de Engenharia de Qualidade da empresa.

## O Incidente Encontrado
Durante uma navegação na página oficial de "Explore Careers", foi identificado um bloqueio crítico de renderização de conteúdo: **A lista de carreiras entrava em looping infinito de carregamento (Spinner stuck)**, quebrando o principal funil de atração da página.

## Estrutura da Auditoria

Para demonstrar senioridade e processo analítico, não documentei apenas o bug de forma isolada (Caixa Preta), mas criei todo o ecossistema de validação esperado no ciclo de desenvolvimento ágil:

0. [**Plano de Testes**](0_test_plan.md): Escopo e matriz de riscos aplicados a esta página específica.
1. [**Mapa Mental Exploratório**](1_exploratory_mindmap.md): Desconstrução visual das funcionalidades (Abas, Paginação, Fallbacks).
2. [**Casos de Teste em BDD**](2_bdd_test_cases.md): Definição do comportamento esperado e como a página *deveria* tratar cenários de falha.
3. [**Relatório do Bug (Bug Report)**](3_bug_report.md): O relatório final, aplicando o conceito de "Caixa Cinza" (Gray Box), isolando sintomas front-end de possíveis causas no backend (APIs) para facilitar a vida do time de desenvolvimento.

---
*Este case prova que a mentalidade de QA não se desliga ao fechar a IDE. A busca pela qualidade e por encontrar caminhos de melhoria é um processo constante.*
