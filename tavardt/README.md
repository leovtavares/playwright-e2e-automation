[🇺🇸 English](#english) | [🇧🇷 Português](#português)

<a id="english"></a>
# Client: TAVARDT (ag.tavardt.com)

Welcome to the specific testing directory for the **TAVARDT** institutional platform. This project demonstrates how I structure quality assurance for a real-world, localized B2B application.

## Critical Thinking & Testing Strategy
When analyzing `ag.tavardt.com`, I identified two critical business flows that could directly impact lead generation and user experience:
1. **Localization (Redirection):** Since it's a global platform, a failure in redirecting users to the correct language (EN/PT-BR/PT/ES/FR/IT) based on their browser locale creates high friction. Testing this automatically ensures the first impression is always correct.
2. **Contact Form:** The core conversion tool of the site. I prioritized edge cases such as empty submissions, invalid email formats, and checking the underlying API response (HTTP 200/400) to ensure data integrity before it reaches the CRM.

## Project Structure

- `/docs`: Contains the "QA Mindset" artifacts.
  - `0_test_plan.md`: High-level test coverage and risk assessment.
  - `1_exploratory_mindmap.md`: SBTM Session Charter and heuristic mindmap.
  - `2_bdd_test_cases.md`: Detailed scenario mapping (Positive, Negative, and Edge Cases).
  - `3_bug_report.md`: Professional defect reporting demonstrating how I document and communicate issues.
- `/e2e`: UI Automation Scripts using **Playwright** (TypeScript). Tests browser-based interactions and DOM validations.
- `/api`: Backend Automation using **Postman**. Contains JSON collections testing the form submission endpoints directly.

<br><br>

<a id="português"></a>
# Cliente: TAVARDT (ag.tavardt.com)

Bem-vindo ao diretório de testes da plataforma institucional **TAVARDT**. Este projeto demonstra como eu estruturo a garantia de qualidade para uma aplicação B2B real e localizada.

## Pensamento Crítico e Estratégia de Teste
Ao analisar o site `ag.tavardt.com`, identifiquei dois fluxos de negócios críticos que podem impactar diretamente a geração de leads e a experiência do usuário:
1. **Localização (Redirecionamento):** Sendo uma plataforma global, uma falha ao redirecionar os usuários para o idioma correto (EN/PT-BR/PT/ES/FR/IT) com base no 'locale' do navegador cria alto atrito. Testar isso automaticamente garante que a primeira impressão seja sempre correta.
2. **Formulário de Contato:** A principal ferramenta de conversão do site. Priorizei casos de borda como envios em branco, formatos de e-mail inválidos e a validação da resposta da API (HTTP 200/400) para garantir a integridade dos dados antes de chegarem ao CRM.

## Estrutura do Projeto

- `/docs`: Contém os artefatos do "Mindset de QA".
  - `0_test_plan.md`: Cobertura de testes de alto nível e avaliação de riscos.
  - `1_exploratory_mindmap.md`: Charter de Sessão SBTM e mapa mental heurístico.
  - `2_bdd_test_cases.md`: Mapeamento detalhado de cenários (Caminhos Felizes, Negativos e Casos de Borda).
  - `3_bug_report.md`: Reporte profissional de defeitos, demonstrando como eu documento e comunico problemas.
- `/e2e`: Scripts de Automação de UI usando **Playwright** (TypeScript). Testa interações baseadas no navegador e validações de DOM.
- `/api`: Automação de Backend usando **Postman**. Contém coleções JSON testando os endpoints de submissão do formulário diretamente.
