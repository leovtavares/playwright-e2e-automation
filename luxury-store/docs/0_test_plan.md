# 0. Plano de Testes (Test Plan)

Este documento descreve a estratégia, o escopo e o planejamento das atividades de Quality Assurance para a release focada no fluxo de compra e catálogo do E-commerce de Luxo.

## 1. Objetivo
Garantir a qualidade, segurança e aderência às regras de negócio da plataforma, com foco na jornada de descoberta de produto e fluxo transacional, assegurando que o cliente tenha uma experiência fluida e sem falhas críticas.

## 2. Escopo de Testes

### Dentro do Escopo (In Scope)
- Fluxo de Autenticação (Cadastro, Login e Recuperação de Senha).
- Vitrine e Filtros (Condição e Estado de Conservação).
- Página de Detalhes do Produto (PDP) e visualização do Certificado de Autenticidade.
- Carrinho de Compras (Tratamento de concorrência para estoque único).
- Cálculo de Frete e integrações logísticas.

### Fora do Escopo (Out of Scope)
- Painel de Gestão do Vendedor (Fornecedores de peças).
- Integração com o ERP financeiro da empresa.
- Testes de Carga/Stress (foco atual em testes funcionais e exploratórios).

## 3. Estratégia de Testes
A abordagem de testes será híbrida, priorizando a mitigação de riscos de negócio:
- **Testes Funcionais:** Baseados nos critérios de aceite documentados via BDD.
- **Testes Exploratórios:** Utilização de heurísticas de navegação focadas em encontrar edge cases e quebras de UX/UI, guiados por Mapas Mentais.
- **Testes de API:** Validação direta de retornos do Backend (Status Code, Tempo de Resposta e Contratos JSON) via Postman para isolamento de falhas de frontend versus backend.

## 4. Ambiente de Testes
Considerando o alto volume de acessos B2C via dispositivos móveis, a cobertura de ambiente será:
- **Desktop:** Google Chrome (Windows 11)
- **Mobile:** Safari Mobile (iOS - iPhone 13 Pro)

## 5. Matriz de Riscos

| Risco de Negócio | Probabilidade | Impacto | Mitigação (Estratégia QA) |
| :--- | :--- | :--- | :--- |
| Concorrência no Carrinho (2 usuários comprando 1 item) | Média | Alto | Cenários BDD específicos cobrindo bloqueio de estoque. |
| Inconsistência nos Filtros de Conservação | Alta | Médio | Testes exploratórios focados nas combinações ilógicas de filtros. |
| Quebra da API de Cálculo de Frete | Baixa | Alto | Teste de contrato de API validando o status de resposta do servidor. |
