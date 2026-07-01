# 2. Casos de Teste (BDD) - Filtros e Listagem

Os cenários abaixo foram escritos com foco no comportamento esperado (Behavior-Driven Development) da página de exploração de carreiras. O objetivo é balizar como a funcionalidade de listagem e filtragem de categorias deveria se comportar em um cenário sem bugs.

## Funcionalidade: Listagem de Carreiras por Categoria

**Como** um usuário buscando iniciar na área de TI
**Quero** poder filtrar carreiras por categorias de tecnologia (Cloud, AI, Cyber)
**Para que** eu possa ver apenas os perfis profissionais que me interessam

### Cenário 1: Carregamento inicial com sucesso da aba "All"
**Dado** que acesso a URL `https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all`
**E** o servidor backend está operante
**Quando** a página termina o processo de renderização (React Hydration)
**Então** a lista de carreiras deve ser exibida abaixo dos botões de filtro
**E** o loading spinner vermelho deve desaparecer da tela

### Cenário 2: Transição entre abas de categorias
**Dado** que estou visualizando a aba "All"
**Quando** clico na categoria "Cyber"
**Então** a interface deve exibir brevemente o loading spinner
**E** a lista deve ser populada apenas com profissões relacionadas a Cybersecurity
**E** a URL no navegador deve ser atualizada para `?category=Cyber`

### Cenário 3: Exibição adequada em caso de falha de servidor (Tratamento de Erro)
**Dado** que a API responsável por buscar as carreiras retorna um Erro 500 (Internal Server Error) ou sofre timeout
**Quando** eu acesso ou filtro a página
**Então** o loading spinner NÃO deve ficar em exibição infinita
**E** uma mensagem amigável de erro deve ser exibida ao usuário (ex: "Não foi possível carregar as carreiras neste momento.")
