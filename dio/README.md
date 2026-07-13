[English](#english) | [Português](#português)

<a id="english"></a>
# DIO Domain Documentation

**Business Goal:**
Validate the reliability of the DIO educational platform's public profile rendering, Single Page Application (SPA) state hydration, and static asset resolution mechanisms under deep-linking scenarios.

**Test Scenarios Mapped & Strategy:**
This repository uses specific tools to map the business requirements into technical testing layers. Here is the strategy for this domain:

- **Current Repository Target:** UI Regression, React SPA Hydration timeouts, and infinite loading spinners caused by silent relative path 404 resource errors.


**Repository Structure:**
```text
📁 dio
├── 📁 api
│   └── 📄 dio_api_tests.collection.json
├── 📁 docs
│   ├── 📄 0_test_plan.md
│   ├── 📄 1_exploratory_mindmap.md
│   ├── 📄 2_bdd_test_cases.md
│   └── 📄 3_bug_report.md
└── 📁 e2e
    └── 📁 tests
        └── 📄 profile_loading.spec.ts
```


> *Note: The tests in this repository are simulated for educational and portfolio demonstration purposes.*

---
<br><br>

<a id="português"></a>
# Documentação de Domínio: DIO Domain

**Objetivo de Negócio:**
Validar a confiabilidade da renderização do perfil público na plataforma educacional DIO, garantindo a hidratação correta de estado da Single Page Application (SPA) e a resolução de assets estáticos em cenários de deep-linking (roteamento profundo).

**Cenários de Teste Mapeados & Estratégia:**
Este repositório utiliza ferramentas específicas para mapear os requisitos de negócio nas camadas técnicas de teste. Aqui está a estratégia para este domínio:

- **Alvo do Repositório Atual:** Regressão de UI, timeouts de Hidratação do React SPA, e cenários de *infinite loading spinners* causados por erros 404 silenciosos de caminhos relativos em assets estáticos.

**Estrutura do Repositório:**
```text
📁 dio
├── 📁 api
│   └── 📄 dio_api_tests.collection.json
├── 📁 docs
│   ├── 📄 0_test_plan.md
│   ├── 📄 1_exploratory_mindmap.md
│   ├── 📄 2_bdd_test_cases.md
│   └── 📄 3_bug_report.md
└── 📁 e2e
    └── 📁 tests
        └── 📄 profile_loading.spec.ts
```

> *Nota: Os testes neste repositório são simulados para fins educacionais e de demonstração de portfólio.*