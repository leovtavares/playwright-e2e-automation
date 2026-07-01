# 1. Mapa Mental Exploratório - CompTIA Explore Careers

Este mapa mental detalha a heurística de testes aplicada na página de Job Roles da CompTIA. O objetivo foi explorar os caminhos possíveis que o usuário poderia tomar e as integrações de API necessárias para renderizar o conteúdo.

```mermaid
mindmap
  root((CompTIA Explore Careers))
    Navegação de Categorias
      Aba 'All'
        Renderização inicial
        Falhas de timeout de API
      Abas Específicas
        Digital Foundations
        AI
        Cloud
        Cyber
        Data
        Network
        Tech Support
      Transição rápida entre abas
        Race conditions nas requisições
        Cancelamento de fetch anterior
    Paginação
      Avançar para página 2
      Voltar para página 1
      Alteração da URL `?page=X`
      Comportamento do loading spinner
    Estado do Sistema
      Loading spinner infinito
      Tratamento de Erros 500
      Fallbacks de UI (O que aparece se a API cair?)
```
