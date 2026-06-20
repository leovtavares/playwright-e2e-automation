# Plano de Testes - Plataforma Institucional TAVARDT

## 1. Introdução
Este documento descreve a estratégia de testes, escopo, abordagens e critérios estabelecidos para a garantia de qualidade do site institucional `ag.tavardt.com`. O objetivo é assegurar o correto funcionamento das funcionalidades críticas de interface pública antes de qualquer integração com CRM ou lançamento.

## 2. Escopo
As seguintes funcionalidades estão **dentro do escopo** de validação:
- Sistema de Redirecionamento de Idioma baseado no *locale* do usuário (EN / PT-BR / PT / ES / FR / IT).
- Validações de frontend e envio do Formulário de Contato.
- Renderização visual básica e elementos interativos essenciais do formulário.

As seguintes funcionalidades estão **fora do escopo**:
- Testes de carga e performance (Stress Test).
- Testes de segurança e penetração (Pentest).

## 3. Tipos de Teste e Estratégia
A abordagem envolverá testes de caixa preta focados em usabilidade e regras de negócio:
1. **Testes Funcionais Manuais:** Executados inicialmente para entender o comportamento esperado (Caminho Feliz e Fluxos de Exceção).
2. **Testes Automatizados (Playwright):** Regressão contínua nas features de Idioma e Formulário.
3. **Testes de API (Postman):** Validação dos endpoints de submissão expostos pelo formulário.

## 4. Ambientes de Teste
- **URL Base:** `https://ag.tavardt.com`
- **Navegadores Homologados:** Chrome/Chromium, Firefox, WebKit (Safari).
- **Dispositivos Simulados:** Desktop (1080p), Mobile (Viewport do iPhone 12).

## 5. Critérios de Aceitação (DoD)
- O idioma padrão da página inicial deve corresponder às configurações regionais do navegador do cliente.
- O formulário de contato deve impedir envios com campos em branco.
- O formulário de contato deve retornar feedback claro (sucesso ou erro) em caso de submissão via rede.

## 6. Riscos Mapeados
- **Risco:** Bloqueios de CORS ao tentar simular envio de formulários via scripts automatizados ou Postman.
- **Risco:** Redirecionamento de idioma causando loop de requests em determinados agentes de usuário (bots).
