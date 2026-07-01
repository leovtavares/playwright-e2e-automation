[English](#english) | [Português](#português)

<a id="english"></a>
# Quality Assurance (QA) & Engineering Portfolio

[![CI/CD Pipeline](https://github.com/realleotavares/playwright-e2e-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/realleotavares/playwright-e2e-automation/actions)
[![Playwright](https://img.shields.io/badge/Playwright-Enabled-2EAD33?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Live Report](https://img.shields.io/badge/Live%20Dashboard-GitHub%20Pages-blue?logo=github)](https://realleotavares.github.io/playwright-e2e-automation/)

Welcome to my automation and software quality engineering portfolio. 
This repository is living proof of my skills as a Software Development Engineer in Test (SDET) and QA Analyst, moving beyond basic UI checks into **Risk-Based Testing**, **Architecture validation**, and **DevOps CI/CD infrastructure**.

## Repository Architecture (Multi-Client Monorepo)

This repository adopts an enterprise-level Monorepo pattern where tests are strictly isolated by "client" or "project", addressing specific modern application failure nodes.

```text
📁 playwright-e2e-automation/
├── 📄 README.md                   # This document
├── 📄 playwright.config.ts        # Global Playwright configuration with Monorepo setup
├── 📁 .github/workflows/          # CI/CD Pipelines (Caching, GH Pages Deploy)
│
├── 📁 luxury-store/               # E-commerce Concurrency & Inventory
│   ├── 📄 e2e/checkout.spec.ts    # Tests Race Conditions and HTTP 409 Conflict handling
│   └── 📁 api/                    # Backend inventory isolation tests
│
├── 📁 postman/                    # Security & Optimistic UI
│   ├── 📄 e2e/optimistic_ui.spec  # Proves state misalignment (Frontend lying to user)
│   └── 📁 api/                    # Security tokens and API auth logic
│
├── 📁 comptia/                    # React & Modern Frontend Reliability
│   ├── 📄 e2e/bug_regression.spec # Tests Hydration timeouts and infinite loading spinners
│
└── 📁 tavardt/                    # Internationalization & Accessibility
    ├── 📁 e2e/tests/              # WCAG (Axe-core), i18n routing, and contact flows
    └── 📁 docs/                   # Exploratory mindmaps and QA mindset documentation
```

## Live Quality Dashboard

> **[View Live HTML Test Report](https://realleotavares.github.io/playwright-e2e-automation/)**
> 
> Our CI/CD pipeline automatically publishes the latest Playwright test execution report to GitHub Pages. It includes traces, screenshots, and videos of any architectural failures found during E2E runs.

## Quick Start (Developer Onboarding)

Want to run these tests locally? It takes less than 2 minutes.

**Prerequisites:** [Node.js](https://nodejs.org/) (v18+)

```bash
# 1. Clone the repository
git clone https://github.com/realleotavares/playwright-e2e-automation.git
cd playwright-e2e-automation

# 2. Install dependencies (Clean install based on package-lock)
npm ci

# 3. Install Playwright browsers
npx playwright install --with-deps chromium

# 4. Run the full E2E Suite
npx playwright test

# 5. View the Interactive Report
npx playwright show-report
```

*Note: Some Postman identity tests may be skipped locally if the `POSTMAN_SID` environment variable is not injected via your `.env` file (Security best practice).*

## The QA Engineering Ecosystem

This repository is part of a larger Quality Engineering ecosystem, demonstrating my ability to test applications across the entire testing pyramid. Check out the other layers:

- **[Playwright E2E Architecture](https://github.com/realleotavares/playwright-e2e-automation)** (Main E2E Framework)
- **[Pytest API Automation](https://github.com/realleotavares/pytest-api-automation)** (Backend JSON & Schema validation)
- **[QA Robot Framework & Python](https://github.com/realleotavares/qa-robot-framework-python)** (BDD & Keyword-Driven UI Testing)
- **[K6 Performance Testing](https://github.com/realleotavares/k6-performance-testing)** (Load, Stress & Spike Testing SLAs)

---
*This portfolio is governed by strict CI/CD and engineering standards.*

<br><br><br>

<a id="português"></a>
# Portfólio de Quality Assurance (QA) & Engenharia

[![CI/CD Pipeline](https://github.com/realleotavares/playwright-e2e-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/realleotavares/playwright-e2e-automation/actions)
[![Playwright](https://img.shields.io/badge/Playwright-Enabled-2EAD33?logo=playwright)](https://playwright.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Live Report](https://img.shields.io/badge/Live%20Dashboard-GitHub%20Pages-blue?logo=github)](https://realleotavares.github.io/playwright-e2e-automation/)

Bem-vindo ao meu portfólio de automação e engenharia de qualidade de software. 
Este repositório é a prova viva das minhas habilidades como Engenheiro de Qualidade (SDET) e Analista de QA. Aqui eu vou além de checagens básicas de UI e aplico **Testes Baseados em Risco**, **Validação Arquitetural** e **Infraestrutura CI/CD (DevOps)**.

## Arquitetura do Repositório (Monorepo Multi-Client)

Este repositório adota um padrão de Monorepo (nível Enterprise), onde os testes são isolados de forma estrita por "cliente" ou "projeto", abordando nós específicos de falhas em aplicações modernas.

```text
📁 playwright-e2e-automation/
├── 📄 README.md                   # Este documento
├── 📄 playwright.config.ts        # Configuração global do Playwright (Monorepo setup)
├── 📁 .github/workflows/          # Pipelines CI/CD (Caching, Deploy no GH Pages)
│
├── 📁 luxury-store/               # E-commerce: Concorrência e Estoque
│   ├── 📄 e2e/checkout.spec.ts    # Testes de Race Conditions e bloqueio HTTP 409 Conflict
│   └── 📁 api/                    # Validação de regras de negócios no backend
│
├── 📁 postman/                    # Segurança e UI Otimista (Optimistic UI)
│   ├── 📄 e2e/optimistic_ui.spec  # Prova o desalinhamento de estado (quando o Front mente ao usuário)
│   └── 📁 api/                    # Autenticação de tokens de segurança
│
├── 📁 comptia/                    # Confiabilidade em React e Frontends Modernos
│   ├── 📄 e2e/bug_regression.spec # Testes de Timeout de Hidratação e Spinners Infinitos
│
└── 📁 tavardt/                    # Internacionalização e Acessibilidade
    ├── 📁 e2e/tests/              # Rotas i18n, fluxo de contatos e testes WCAG (Axe-core)
    └── 📁 docs/                   # Mindmaps exploratórios e documentação de QA Manual
```

## Dashboard de Qualidade (Ao Vivo)

> **[Acessar Relatório HTML Interativo](https://realleotavares.github.io/playwright-e2e-automation/)**
> 
> Nossa pipeline CI/CD publica automaticamente o último relatório de execução do Playwright no GitHub Pages. Ele inclui *traces*, *screenshots* e vídeos de qualquer falha arquitetural encontrada nos testes E2E.

## Quick Start (Onboarding de Desenvolvedores)

Quer rodar estes testes na sua máquina? Leva menos de 2 minutos.

**Pré-requisitos:** [Node.js](https://nodejs.org/) (v18+)

```bash
# 1. Clone o repositório
git clone https://github.com/realleotavares/playwright-e2e-automation.git
cd playwright-e2e-automation

# 2. Instale as dependências (Clean install respeitando o package-lock)
npm ci

# 3. Instale os navegadores do Playwright
npx playwright install --with-deps chromium

# 4. Rode a suíte E2E Completa
npx playwright test

# 5. Visualize o Relatório Interativo
npx playwright show-report
```

*Nota: Alguns testes de identidade do Postman podem ser ignorados localmente se a variável de ambiente `POSTMAN_SID` não for injetada no seu arquivo `.env` (Padrão ouro de Segurança/AppSec).*

## O Ecossistema de Engenharia de Qualidade

Este repositório faz parte de um ecossistema maior de Quality Engineering, demonstrando minha habilidade de testar aplicações em todas as camadas da Pirâmide de Testes. Conheça as outras camadas:

- **[Playwright E2E Architecture](https://github.com/realleotavares/playwright-e2e-automation)** (Framework Principal de E2E)
- **[Pytest API Automation](https://github.com/realleotavares/pytest-api-automation)** (Validação de Backend JSON & Schema)
- **[QA Robot Framework & Python](https://github.com/realleotavares/qa-robot-framework-python)** (Testes de UI BDD & Keyword-Driven)
- **[K6 Performance Testing](https://github.com/realleotavares/k6-performance-testing)** (SLAs de Load, Stress & Spike Testing)

---
*Este portfólio é governado por rigorosos padrões de CI/CD e engenharia de software.*

