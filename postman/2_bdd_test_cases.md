# Zephyr Scale: Matriz de Execução de Testes

**Ciclo:** PST-REL-11.1.0  
**Pasta:** `/Identity/Settings`  
**Data de Execução:** 30 de Junho de 2026  

| Test Key | Descrição (Resumo BDD) | Status | Executado Por | Defeitos Vinculados |
| :--- | :--- | :--- | :--- | :--- |
| **PST-TC-001** | **Dado** que o usuário preenche a Bio e clica em Update<br>**Quando** o proxy da API retorna sucesso (HTTP 200)<br>**Então** o sistema exibe o toast "Updated your user profile" | ✅ **PASS** | L. Tavares | - |
| **PST-TC-002** | **Dado** que o usuário atualizou os dados do perfil<br>**Quando** ele navega para outra aba e retorna (ou recarrega a página)<br>**Então** os dados recém-inseridos devem estar mantidos e visíveis no formulário | ❌ **FAIL** | L. Tavares | `PST-2044` |
| **PST-TC-003** | **Dado** que o backend recusa a mutação por falha de schema<br>**Quando** a resposta retorna para o client<br>**Então** a UI não deve mostrar o Toast Verde de sucesso | ❌ **FAIL** | L. Tavares | `PST-2044` |

---
*Nota: A arquitetura atual da UI não está lidando corretamente com os retornos do Proxy, classificando tudo que seja HTTP 200 como um "Save Sucesso", mesmo que o payload de dados não tenha sido persistido na entidade (EntityId).*
