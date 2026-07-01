# 3. Bug Report - Infinite Loading no "Explore Careers"

O relatório abaixo detalha a falha crônica encontrada no ambiente de produção da CompTIA. Como Analista de QA, é fundamental ir além de apontar que "a tela está em branco". Este relatório simula a postura de "Caixa Cinza" (Gray Box), isolando o problema para guiar a equipe de engenharia.

---

**ID:** BUG-CPT-001
**Título:** Lista de Carreiras (Job Roles) em loading infinito na página principal de carreiras
**Prioridade:** Alta (P1)
**Severidade:** Crítica (S1) - Bloqueia o principal funil de descoberta do usuário.
**Status:** Aberto

### Descrição
Ao acessar a página de "Explore Careers / Job Roles" ou ao tentar alternar entre os filtros de categorias (ex: AI, Cloud, Cyber), o conteúdo principal das vagas não é renderizado. O componente da listagem entra em estado de `loading` contínuo (spinner vermelho parcial na tela), impedindo completamente que o usuário consuma o conteúdo da página. A falha ocorre tanto no carregamento inicial via URL direta quanto na navegação via botões da interface.

### Passos para Reproduzir
1. Acesse o ambiente de produção através da URL: `https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all`
2. Aguarde o fim do carregamento do documento (DOM).
3. Role a tela levemente para baixo, até a seção de filtros (All, Digital Foundations, AI, etc.).
4. Observe a área imediatamente abaixo do componente de filtros pretos.

### Resultado Esperado (Critério de Aceite)
Após a hidratação da página (React), o spinner de loading deveria desaparecer e uma grade estruturada de cards contendo os perfis profissionais (Data Analyst, Cloud Architect, etc.) deveria ser exibida.

### Resultado Obtido
A página trava na interface de loading. Apenas metade do spinner vermelho (Loader SVG/CSS) fica visível na tela e o conteúdo jamais é renderizado, caracterizando uma quebra crítica de front-end.

### Ambiente de Testes
- **OS:** Windows 11
- **Browser:** Google Chrome (v121.0)
- **Environment:** Production (compTIA.org)
- **URL Base:** `https://www.comptia.org/en-us/explore-careers/job-roles/`

### Evidências e Troubleshoot Técnico (F12)
*O comportamento visual de loading infinito geralmente denota uma requisição XHR/Fetch que não foi completada ou não teve seu erro tratado (sem try/catch para renderizar Fallback UI).*

1. **Investigação sugerida para Engenharia:**
   - Verificar a aba **Network** no momento do carregamento. A requisição para a API responsável por entregar o array JSON das profissões (ex: `/api/job-roles`) provavelmente está retornando Status `500 Internal Server Error`, Timeout ou falha de `CORS`.
   - Caso a API esteja retornando `200 OK`, verificar a aba **Console** por exceções de Javascript no momento do mapeamento dos dados (ex: `TypeError: Cannot read properties of undefined (reading 'map')`).

**Anexos:**
- *O print evidenciando a falha visual e o corte na renderização do spinner encontra-se na pasta do repositório/Jira simulado.*
