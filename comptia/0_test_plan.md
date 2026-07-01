# 0. Plano de Testes (Test Plan) - Auditoria de Produção

Este documento descreve a estratégia de Quality Assurance aplicada durante a auditoria do portal "Explore Careers" da CompTIA em ambiente de produção. O foco é identificar anomalias na navegação e renderização de dados para o usuário final.

## 1. Objetivo
Garantir que a listagem de carreiras, a funcionalidade de paginação e o filtro por categorias operem conforme o esperado, entregando o conteúdo correto ao usuário sem quebras de layout ou falhas de requisição.

## 2. Escopo de Testes

### ✅ Dentro do Escopo (In Scope)
- Renderização inicial da lista de vagas/carreiras (Job Roles).
- Navegação entre as categorias (All, Digital Foundations, AI, Cloud, etc.).
- Paginação de resultados.
- Comportamento de estados de carregamento (Loaders/Spinners).

### ❌ Fora do Escopo (Out of Scope)
- Fluxo de compra de Certificações.
- Autenticação e Login de parceiros.
- Testes de performance na infraestrutura raiz.

## 3. Estratégia de Testes
A abordagem escolhida é de **Auditoria em Produção (Caixa Cinza - Gray Box)**, aliando a perspectiva do usuário final com a análise técnica via DevTools:
- **Testes Funcionais:** Verificação do comportamento das abas e botões de paginação.
- **Isolamento de Falhas (Troubleshooting):** Análise de requisições de rede (Network) e exceções no console para classificar se os bugs encontrados são de responsabilidade do Front-end (ex: erro de React Hydration) ou Back-end (ex: erro 500 na API).

## 4. Ambiente de Testes
- **OS:** Windows 11
- **Browser:** Google Chrome (v121.0)
- **Environment:** Produção (compTIA.org)

## 5. Matriz de Riscos

| Risco de Negócio | Probabilidade | Impacto | Mitigação (Estratégia QA) |
| :--- | :--- | :--- | :--- |
| **Conteúdo não renderizar (Tela Branca / Loading Infinito)** | Alta | Crítico | Monitoramento via DevTools da resposta do backend ao mudar categorias. |
| **Paginação não atualizar a URL** | Média | Médio | Validar se o parâmetro `?page=X` altera dinamicamente e persiste no history. |
