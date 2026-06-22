# 2. Casos de Teste: Regras de Negócio em BDD

Nesta sessão, as regras de negócio foram transformadas em cenários de teste reais, utilizando a nomenclatura exata extraída do ambiente de produção. O foco aqui foi traduzir o comportamento esperado do produto em casos claros (BDD/Gherkin).

---

### Feature: Filtros de Condição e Estado de Conservação
**Como** um comprador de luxo exigente  
**Quero** filtrar produtos pelo seu estado real de uso  
**Para que** eu encontre peças que atendam às minhas expectativas de conservação.

#### Cenário 1: Cruzamento de Filtro Válido (Caminho Feliz)
**Dado** que o usuário está na página da categoria "Bolsas"
**Quando** ele seleciona o filtro de Condição "Seminovo"
**E** seleciona o Estado de Conservação "Excelente"
**Então** a vitrine deve carregar apenas bolsas que possuam ambas as tags cadastradas
**E** a contagem total de itens no cabeçalho deve ser atualizada de acordo.

#### Cenário 2: Tratamento de Cenário Ilógico (Edge Case Exploratório)
**Dado** que o usuário está navegando nos produtos da marca "Chanel"
**Quando** ele seleciona a Condição "Nunca Usado"
**E** tenta selecionar o Estado de Conservação "Razoável" ou "Boa"
**Então** o sistema deve desabilitar ou ocultar os estados incompatíveis com a condição "Nunca Usado"
**Ou** exibir uma mensagem clara informando que não existem resultados para essa combinação.

---

### Feature: Reserva de Peça Única no Carrinho (Concorrência)
**Como** plataforma de e-commerce  
**Quero** garantir que duas pessoas não comprem a mesma peça única  
**Para que** eu evite cancelamentos por falta de estoque e frustração do cliente.

#### Cenário 3: Tentativa de compra simultânea (Race Condition)
**Dado** que existe a "Bolsa Tote Chanel Be CC" com estoque exatamente igual a 1
**E** o "Usuário A" adicionou a bolsa ao carrinho
**Quando** o "Usuário B" acessar a Página de Detalhes do Produto (PDP) da mesma bolsa
**Então** o botão "COMPRAR" deve ser substituído pelo aviso "No carrinho de outro cliente" (ou similar)
**E** o "Usuário B" não deve conseguir enviar a requisição POST para adicionar o item ao seu carrinho.

#### Cenário 4: Liberação de reserva por expiração de tempo
**Dado** que o "Usuário A" adicionou uma peça única ao carrinho
**E** a regra de negócio estabelece um tempo máximo de reserva de 20 minutos
**Quando** o "Usuário A" não finalizar a compra dentro deste prazo
**Então** o sistema deve esvaziar o carrinho do "Usuário A"
**E** o estoque do item deve voltar a ficar disponível ("COMPRAR") para o público geral na PDP.

---

### Feature: Transparência na Promessa da Marca
**Como** cliente de alto padrão  
**Quero** ter certeza absoluta de que estou comprando um item original  
**Para que** eu tenha segurança no investimento financeiro.

#### Cenário 5: Certificado de Autenticidade no Resumo do Pedido
**Dado** que o usuário adicionou um sapato "Louboutin" ao carrinho
**Quando** ele avança para a tela de revisão do Checkout
**Então** a interface deve exibir explicitamente a garantia "Acompanha certificado de autenticidade" na lista de itens inclusos
**E** os valores descritos (desconto Pix vs Parcelado) devem estar consistentes com a PDP.
