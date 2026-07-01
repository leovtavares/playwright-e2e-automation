[English](#english) | [Português](#português)

<a id="english"></a>
# Luxury Store Domain Documentation

**Business Goal:**
Validate high-volume cart operations, concurrent purchases, and inventory constraints.

**Test Scenarios Mapped & Strategy:**
This repository uses specific tools to map the business requirements into technical testing layers. Here is the strategy for this domain:

- **Current Repository Target:** Race Conditions, HTTP 409 Conflict handling on checkout.


**Repository Structure:**
```text
📁 luxury-store
├── 📁 api
│   └── 📄 Cart_API_Collection.json
├── 📁 docs
│   ├── 📄 0_test_plan.md
│   ├── 📄 1_exploratory_mindmap.md
│   ├── 📄 2_bdd_test_cases.md
│   ├── 📄 3_bug_report_template.md
│   └── 📄 4_api_postman_strategy.md
└── 📁 e2e
    └── 📄 checkout.spec.ts
```



> *Note: The tests in this repository are simulated for educational and portfolio demonstration purposes.*

---
<br><br>

<a id="português"></a>
# Documentação de Domínio: Luxury Store Domain

**Objetivo de Negócio:**
Validar operações de carrinho de alto volume, compras concorrentes e restrições de estoque.

**Cenários de Teste Mapeados & Estratégia:**
Este repositório utiliza ferramentas específicas para mapear os requisitos de negócio nas camadas técnicas de teste. Aqui está a estratégia para este domínio:

- **Alvo do Repositório Atual:** Race Conditions, tratamento de HTTP 409 Conflict no checkout.

**Estrutura do Repositório:**
```text
📁 luxury-store
├── 📁 api
│   └── 📄 Cart_API_Collection.json
├── 📁 docs
│   ├── 📄 0_test_plan.md
│   ├── 📄 1_exploratory_mindmap.md
│   ├── 📄 2_bdd_test_cases.md
│   ├── 📄 3_bug_report_template.md
│   └── 📄 4_api_postman_strategy.md
└── 📁 e2e
    └── 📄 checkout.spec.ts
```


> *Nota: Os testes neste repositório são simulados para fins educacionais e de demonstração de portfólio.*
