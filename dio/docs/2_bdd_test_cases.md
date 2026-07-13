# Casos de Teste (Test Cases) - DIO

Abaixo estão descritos os cenários de teste mapeados para a plataforma DIO, focados no domínio de perfil público B2C e acessibilidade B2B para tech recruiters.

---

## Módulo: Roteamento e Inicialização (SPA)

### CT-001: Navegação Client-Side pelo Fórum (Caminho Feliz)
- **Pré-condições:** O usuário deve estar na Home da plataforma DIO.
- **Passos para Reproduzir:**
  1. Navegar por um link interno da plataforma (ex: Link para o autor de uma postagem).
  2. Aguardar a transição virtual da Single Page Application (Client-Side).
- **Resultado Esperado:** O perfil (`/users/realleotavares`) carrega corretamente. Os *assets* são aproveitados do cache e não há *reload* forçado do documento principal.
- **Prioridade:** Média
- **Tipo:** Caminho Feliz

### CT-002: Acesso Direto (Deep Linking) ao Perfil (Caminho Feliz)
- **Pré-condições:** Nenhuma.
- **Passos para Reproduzir:**
  1. Digitar a URL direta na barra do navegador (ex: `https://web.dio.me/users/realleotavares?tab=achievements`).
  2. Pressionar Enter e disparar a requisição de inicialização da SPA a partir do zero.
- **Resultado Esperado:** A plataforma deve carregar e hidratar todos os componentes React. Todos os caminhos de `<script>` declarados no `<head>` ou no final do `<body>` devem apontar para a raiz (absolutos), baixando com HTTP 200, sem interrupção.
- **Prioridade:** Máxima
- **Tipo:** Caminho Feliz

### CT-003: Loop Infinito por Quebra de Asset em Rota Relativa
- **Pré-condições:** A aplicação possui no código-fonte caminhos relativos em tags de resource load (ex: `<script src="assets/utils.js">`).
- **Passos para Reproduzir:**
  1. Acessar diretamente a página `https://web.dio.me/users/realleotavares`.
  2. O navegador tentará baixar o asset interpretando o caminho a partir da sub-rota (resultando em `/users/assets/utils.js`).
- **Resultado Atual (Encontrado):** O asset falha com HTTP 404 (Not Found). O React lança uma quebra de componente que não é tratada e o visual trava num *Infinite Spinner*.
- **Resultado Esperado:** O asset deve ter o caminho absoluto (`src="/assets/utils.js"`). E caso uma falha fatal ocorra, a UI deve mostrar um Fallback Error Boundary (`"Ops, tivemos um problema a carregar a página"`), prevenindo a paralisação do navegador.
- **Prioridade:** Crítica
- **Tipo:** Edge Case (Bug-001)

---

## Módulo: Tratamento de Erros de Rede

### CT-004: Tratamento e Timeout de Fetch API
- **Pré-condições:** Estar na página do Perfil do usuário.
- **Passos para Reproduzir:**
  1. Interceptar a chamada de API das conquistas (`https://web.dio.me/api/achievements`).
  2. Simular um atraso na rede (Timeout de 30s) ou uma desconexão temporária no navegador.
- **Resultado Esperado:** A plataforma deve dar timeout de forma limpa, alterando o estado do componente para "Falha ao carregar informações". O restante da tela (Header, Avatar) deve continuar renderizado de forma independente.
- **Prioridade:** Alta
- **Tipo:** Cenário Negativo / Tratamento de Falhas