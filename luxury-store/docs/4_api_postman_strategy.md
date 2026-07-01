# 4. Estratégia de Testes de API (Postman)

Este documento detalha o mapeamento do tráfego de rede do e-commerce e a validação dos contratos de Backend de forma independente do Front-End. A análise foi realizada através da inspeção de requisições e estruturação de coleções no Postman para garantir a integridade dos dados retornados.

## Mapeamento da API de Produtos

Ao buscar pela marca "Chanel" no site, o front-end dispara uma requisição GET para o backend trazer a lista de produtos.

### 1. Endpoint Identificado (Simulação)
- **Método:** `GET`
- **URL Base:** `https://api.[lojadeluxo].com.br/v2/catalog/products`
- **Query Params:**
  - `brand=chanel`
  - `condition=never_used`
  - `page=1`

### 2. Criação da Collection no Postman
Estruturação de requisições com variáveis de ambiente (`{{base_url}}`) para testar o contrato da API de forma isolada.

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

## Payload de Resposta (JSON)
A validação de contrato garante que o objeto retornado contém o status correto de curadoria e estoque.

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
