[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# Quality Assurance (QA) Portfolio

Welcome to my automation and software quality engineering portfolio.

This repository serves as practical evidence of my skills as a Software Test Analyst (QA), ranging from **manual test strategy and scenario mapping** to the construction of **E2E and API automation pipelines**.

## Repository Architecture (Multi-Client)

To demonstrate scalability and enterprise-level organization, this repository adopts an architectural pattern where tests are isolated by "clients" or "projects".

```text
qa/
├── README.md                 # This document
├── .github/workflows/        # CI/CD Pipelines (GitHub Actions)
│
├── tavardt/                  # [Client 1] ag.tavardt.com tests
│   ├── docs/                 # QA Mindset: Manual Test Plans and Cases
│   ├── e2e/                  # Web Automation (Playwright + TypeScript)
│   └── api/                  # API Automation (Postman / Newman)
│
├── client2/                  # [Client 2] ...
│   └── ...
└── client3/                  # [Client 3] ...
    └── ...
```

## Technologies and Tools

- **Planning:** Markdown, Coverage Guides, and Quality Strategy.
- **Web UI Automation:** Playwright with TypeScript (Pattern: Page Objects).
- **API Automation:** Postman (Tests in exported collections).
- **Continuous Integration:** GitHub Actions for cloud test execution on every code change.

## Objective

Demonstrate the critical competencies required in the daily life of a QA professional:
1. **Critical Thinking:** Knowing WHAT to test before knowing HOW to test (Edge Cases and Boundaries).
2. **Technical Quality:** Clean, stable, and maintainable automation code.
3. **Communication:** Efficient reporting of results and clearly documented defects.

---
*This portfolio is constantly evolving.*

<br><br>

<a id="português"></a>
# Portfólio de Quality Assurance (QA)

Bem-vindo ao meu portfólio de automação e engenharia de qualidade. 

Este repositório serve como evidência prática das minhas habilidades como Analista de Testes Automatizados (QA), abrangendo desde a **estratégia e mapeamento manual de cenários** até a construção de **pipelines de automação E2E e API**.

## Arquitetura do Repositório (Multi-Client)

Para demonstrar escalabilidade e organização de nível empresarial, este repositório adota um padrão arquitetural onde os testes são isolados por "clientes" ou "projetos".

```text
qa/
├── README.md                 # Este documento
├── .github/workflows/        # Pipelines de CI/CD (GitHub Actions)
│
├── tavardt/                  # [Cliente 1] Testes do site ag.tavardt.com
│   ├── docs/                 # Mindset de QA: Planos e Casos de Teste Manuais
│   ├── e2e/                  # Automação Web (Playwright + TypeScript)
│   └── api/                  # Automação de API (Postman / Newman)
│
├── client2/                  # [Cliente 2] ...
│   └── ...
└── client3/                  # [Cliente 3] ...
    └── ...
```

## Tecnologias e Ferramentas

- **Planejamento:** Markdown, Guias de Cobertura e Estratégia de Qualidade.
- **Automação Web UI:** Playwright com TypeScript (Pattern: Page Objects).
- **Automação API:** Postman (Testes em coleções exportadas).
- **Integração Contínua:** GitHub Actions para execução de testes em nuvem a cada alteração no código.

## Objetivo

Demonstrar as competências críticas exigidas no dia a dia de um profissional de QA:
1. **Pensamento Crítico:** Saber O QUE testar antes de saber COMO testar (Casos Específicos e Limites).
2. **Qualidade Técnica:** Código de automação limpo, estável e manutenível.
3. **Comunicação:** Reporte eficiente de resultados e falhas documentadas com clareza.

---
*Este portfólio está em constante evolução.*
