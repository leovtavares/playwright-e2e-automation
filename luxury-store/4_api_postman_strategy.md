# 4. Estratégia de Testes de API (Postman)

Requisito da Vaga: *"Noções de testes de API usando ferramentas como Postman, Insomnia ou API Dog"*.

Para comprovar que o conhecimento vai além da teoria, este documento detalha como um Analista de QA utiliza o Inspecionar (F12 > Network) do navegador para mapear o tráfego do e-commerce e validar os retornos do Backend de forma independente do Front-End.

## 🕵️‍♂️ Mapeamento da API de Produtos

Ao buscar pela marca "Chanel" no site, o front-end dispara uma requisição GET para o backend trazer a lista de produtos.

### 1. Endpoint Identificado (Simulação)
- **Método:** `GET`
- **URL Base:** `https://api.[lojadeluxo].com.br/v2/catalog/products`
- **Query Params:**
  - `brand=chanel`
  - `condition=never_used`
  - `page=1`

### 2. Criação da Collection no Postman
No Postman, criei uma requisição estruturada com variáveis de ambiente (`{{base_url}}`) para testar o contrato da API de forma isolada.

**Testes Implementados no Postman (Aba "Tests" / JavaScript):**
```javascript
// Valida se o servidor responde rápido e com sucesso
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// Valida se o tempo de resposta aceitável para e-commerce
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

// Valida a Regra de Negócio: Se busquei Chanel, tudo na lista deve ser Chanel
pm.test("Todos os produtos devem ser da marca Chanel", function () {
    var jsonData = pm.response.json();
    for (let i = 0; i < jsonData.data.items.length; i++) {
        pm.expect(jsonData.data.items[i].brand.name.toLowerCase()).to.eql("chanel");
    }
});
```

## 📦 Payload de Resposta (JSON)
Uma validação de contrato deve garantir que o objeto retornado contém o status de curadoria.

```json
{
  "success": true,
  "data": {
    "items": [
      {
        "id": "PROD_98453",
        "brand": { "id": 12, "name": "Chanel" },
        "name": "Bolsa Tote Chanel Be CC Vermelho",
        "stock": 1,
        "price": {
          "pix": 15000.00,
          "installments": 17500.00
        },
        "condition": "Nunca Usado",
        "authenticity_certified": true
      }
    ]
  }
}
```

### 🎯 Por que isso importa para a Vaga?
Se um usuário relatar que a vitrine está vazia, o QA que domina API não abre um bug dizendo "Site não funciona". Ele dispara a API no Postman e descobre se o erro é no Backend (a API caiu) ou no Front-End (o React/Vue não conseguiu renderizar o JSON). Isso acelera a resolução do ticket pela equipe de desenvolvimento.
