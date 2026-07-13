# Plano de Testes - Plataforma Educacional DIO

## 1. Introdução
Este documento descreve a estratégia de testes, escopo, abordagens e critérios estabelecidos para a garantia de qualidade do domínio de perfis de usuário da plataforma educacional DIO (`web.dio.me`). O objetivo central é assegurar a consistência da renderização (Single Page Application) e garantir que estudantes B2C e tech recruiters B2B acessem as conquistas (achievements) sem interrupções por falhas de roteamento.

## 2. Escopo
As seguintes funcionalidades estão **dentro do escopo** de validação:
- Carregamento inicial do *Client-Side Rendering* (CSR) e hidratação da árvore de componentes React no domínio de Perfil Público.
- Roteamento Profundo (Deep Linking): Acessos diretos (via URL) às sub-rotas como `/users/[id]?tab=achievements`.
- Resolução e carregamento de *assets* estáticos vitais (scripts, traduções JSON) exigidos para a renderização do perfil.

As seguintes funcionalidades estão **fora do escopo**:
- Validação de regras de negócio das APIs REST da DIO (validadas no repositório *pytest-api-automation*).
- Testes de carga e stress (validados no repositório *k6-performance-testing*).

## 3. Tipos de Teste e Estratégia
A abordagem focará no mapeamento de erros silenciosos que quebram a interface do usuário:
1. **Testes Funcionais Exploratórios (SBTM):** Sessões manuais focadas em *Deep Linking* e simulação de falhas de rede para *assets* parciais.
2. **Testes E2E Automatizados (Playwright):** Interceptação de tráfego de rede para simular respostas 404 (Not Found) em caminhos de *assets* estáticos, validando a resiliência (ou a falha) da interface em tempo de execução.
3. **Análise de Resource Load Errors:** Validação de injeção de erros que não fazem *bubble up* para o bloco global de `window.onerror`.

## 4. Ambientes de Teste
- **URL Base:** `https://web.dio.me`
- **Navegadores Homologados:** Chrome/Chromium, Firefox, WebKit (Safari).
- **Ferramentas de Telemetria (QA):** BugLog (Extensão de injeção no navegador).

## 5. Critérios de Aceitação (DoD)
- O acesso direto a qualquer sub-rota do sistema (ex: `/users/realleotavares`) deve hidratar a página com sucesso sem retenção em estado de *Infinite Loading*.
- Caminhos para recursos estáticos (`utils.js`, `translation.json`) no DOM devem ser definidos de maneira absoluta a partir da raiz (ex: `src="/assets/utils.js"`), prevenindo a resolução relativa acoplada à URL da rota ativa.
- Caso o backend falhe, a plataforma deve apresentar uma mensagem amigável (Fallback) de erro, em vez de um spinner perpétuo.

## 6. Riscos Mapeados
- **Risco:** Erros 404 (Not Found) em recursos vitais (tag `<script>`) são tratados silenciosamente pelo navegador (sem disparo nativo de exceção no console central), dificultando a detecção proativa por ferramentas tradicionais de *Crash Analytics*.
- **Risco:** A perda da experiência do usuário no perfil de desenvolvedores da plataforma DIO afeta diretamente a credibilidade técnica perante recrutadores que acessam links diretos de currículos.