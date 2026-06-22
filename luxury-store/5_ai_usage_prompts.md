# 5. Inteligência Artificial como Aliada de Qualidade

Requisito da Vaga: "Curiosidade para utilizar IA como apoio na criação de cenários, documentação, análise de bugs...".

Um analista de QA moderno não vê a IA como ameaça, mas como uma alavanca para pensar "fora da caixa". Abaixo, documento os Prompts (comandos) que estruturei em LLMs (ChatGPT/Gemini) para atuar em Pair-Testing neste próprio estudo de caso.

---

## Prompt: Geração de Edge Cases (Testes de Limite)

Para evitar o viés cognitivo do "caminho feliz" ao pensar nas regras de negócio, utilizei o seguinte prompt:

> **Role (Papel):** Atue como um QA Sênior e Especialista em Segurança focado em e-commerces de alto tráfego e alto ticket médio.
> 
> **Contexto:** Estou validando um site de revenda de luxo (produtos seminovos). A regra principal do negócio é que o estoque de cada produto é sempre **igual a 1** (são peças únicas) e as compras variam de R$ 3.000 a R$ 50.000. O sistema temporariamente "reserva" a peça no carrinho de quem adicionar primeiro por 20 minutos.
> 
> **Ação:** Gere 5 cenários de teste *Edge Case* (situações extremas, raras ou mal-intencionadas) para quebrar esse fluxo de compra e reserva. Foque em vulnerabilidades de API, concorrência no banco de dados e UX. Formate a resposta de forma direta.

### Resultados Obtidos via IA (Insights acionáveis):
1. **Manipulação de Tempo da Sessão (Client-Side):** E se o cliente alterar o relógio local do Windows/celular para burlar o cronômetro de 20 minutos do carrinho? O backend confia na hora do client ou tem sua validação própria (server-side)?
2. **Double-Click em rede lenta (Race Condition severa):** Um usuário em 3G clica em "Comprar" duas vezes rapidamente em uma peça de estoque 1. A API enfileira duas requisições idênticas; o sistema cobra duas vezes no cartão pelo mesmo item único?
3. **Exploitation de Carrinho Fantasma:** E se um "bot" concorrente adicionar todos os itens novos do site aos seus respectivos carrinhos e não fechar a compra, travando o estoque inteiro do e-commerce por 20 minutos de forma cíclica? Existe limite de itens únicos por sessão/IP?

## Conclusão da Dinâmica
O uso de IA elevou a qualidade da estratégia. Casos como o "Carrinho Fantasma" e a validação do "Tempo Server-Side vs Client-Side" são testes cruciais de segurança de negócio que um QA humano poderia demorar horas para cogitar, mas que a IA ajudou a mapear em segundos, permitindo focar na execução da validação.
