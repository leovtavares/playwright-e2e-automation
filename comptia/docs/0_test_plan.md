# Confluence: Documento de Estratégia de Testes

**Épico:** `CPT-8992: Career Explorer Revamp`  
**Status:** Aprovado  
**Autor:** Equipe de Engenharia de QA  

---

## 1. Definição de Escopo

### 1.1 Funcionalidades Dentro do Escopo (Sprint 42)
- Renderização inicial do componente de grade de Carreiras (Job Roles).
- Mecanismos de filtro por categoria (All, Digital Foundations, AI, Cloud, Cyber, Data, Network, Tech Support).
- Lógica de paginação (vinculação de parâmetro de URL `?page=X`).
- Empty states e skeletons de carregamento (Loaders).

### 1.2 Fora do Escopo
- Funil de compra de certificações.
- Validação de metadados de SEO (Coberto na Sprint 40).
- Inserção de dados no CMS / Back-office.

## 2. Abordagem de Testes
Uma abordagem híbrida de testes será utilizada para validar os contratos de front-end e back-end em produção.

### 2.1 Testes Funcionais (BDD)
Verificação dos critérios de aceite definidos nas histórias do Jira. Monitorado via ciclos de teste no Xray/Zephyr.

### 2.2 Testes Exploratórios (SBTM)
O Gerenciamento de Testes Baseado em Sessão (SBTM) será aplicado para descobrir edge cases em relação a race conditions (ex: clicar rapidamente em categorias diferentes antes do payload anterior ser resolvido).

### 2.3 Integração e API
Validação direta dos endpoints REST / React Server Components (RSC) que servem os dados das Carreiras para isolar defeitos de UI de falhas de rede do Backend (Timeouts ou WAF Blocks).

## 3. Detalhes do Ambiente
- **Ambiente:** Produção (compTIA.org)
- **Massa de Dados:** Base de Dados Real
- **Navegadores Alvo:** Chrome (v149), Safari (iOS 17.2)

## 4. Matriz de Rastreabilidade de Requisitos (RTM)

| ID do Req | História Jira | Descrição | Testes Associados |
| :--- | :--- | :--- | :--- |
| REQ-01 | CPT-8993 | Usuário pode ver todas as carreiras por padrão | CPT-TC-101 |
| REQ-02 | CPT-8994 | Usuário pode filtrar vagas por categoria específica | CPT-TC-102 |
| REQ-03 | CPT-8995 | UI deve tratar falhas de API com graciosidade (Error Boundaries) | CPT-TC-103 |
