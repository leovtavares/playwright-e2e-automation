# Zephyr Scale: Matriz de Execução de Testes

**Ciclo:** CPT-REL-2.4.1  
**Pasta:** `/Explore-Careers/Job-Roles`  
**Data de Execução:** 30 de Junho de 2026  

| Test Key | Descrição (Resumo BDD) | Status | Executado Por | Defeitos Vinculados |
| :--- | :--- | :--- | :--- | :--- |
| **CPT-TC-101** | **Dado** que o usuário acessa a página /job-roles<br>**Quando** a chamada inicial da API é resolvida<br>**Então** a grade deve renderizar todas as carreiras | ❌ **FAIL** | L. Tavares | `CPT-9045` |
| **CPT-TC-102** | **Dado** que o usuário está vendo a aba "All"<br>**Quando** ele clica no filtro "Cyber"<br>**Então** a URL atualiza para `?category=Cyber` e a grade é re-renderizada | 🚫 **BLOCKED** | L. Tavares | `CPT-9045` |
| **CPT-TC-103** | **Dado** que a API do backend retorna um erro 403 ou 500<br>**Quando** o front-end tenta processar o payload<br>**Então** uma UI de fallback (Error Boundary) deve ser exibida (sem loading infinito) | ❌ **FAIL** | L. Tavares | `CPT-9045` |

---
*Nota: TC-102 está bloqueado (Blocked) porque o componente base falha ao renderizar o estado inicial, impedindo qualquer interação com os filtros.*
