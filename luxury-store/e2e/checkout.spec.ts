import { test, expect } from '@playwright/test';

test.describe('Luxury Store - Checkout Flow', () => {
  
  test('Tentativa de adicionar peça única já reservada', async ({ page }) => {
    // 1. Simular acesso à página do produto "Bolsa Chanel Vintage (Peça Única)"
    await page.route('**/api/v1/products/LX-9923', async (route) => {
      const json = { id: 'LX-9923', name: 'Bolsa Chanel Vintage', stock: 1, reservedBy: 'other_user' };
      await route.fulfill({ json });
    });

    // Mockar erro de carrinho 409 Conflict (Estoque = 0)
    await page.route('**/api/v1/cart', async (route) => {
      await route.fulfill({
        status: 409,
        json: { error: "Este item acabou de ser reservado por outro cliente." }
      });
    });

    // 2. Montar a UI da página fake
    await page.setContent(`
      <html>
        <body>
          <h1>Bolsa Chanel Vintage</h1>
          <p>Disponível: 1 peça</p>
          <button id="add-to-cart">Adicionar ao Carrinho</button>
          <div id="toast" style="display:none; color: red;"></div>
          <script>
            document.getElementById('add-to-cart').addEventListener('click', () => {
              fetch('/api/v1/cart', { method: 'POST' }).then(res => res.json()).then(data => {
                if(data.error) {
                  const toast = document.getElementById('toast');
                  toast.innerText = data.error;
                  toast.style.display = 'block';
                }
              });
            });
          </script>
        </body>
      </html>
    `);

    // 3. Ação: Usuário clica para comprar
    await page.click('#add-to-cart');

    // 4. Assert: O toast vermelho de erro de concorrência deve aparecer
    const toast = page.locator('#toast');
    await expect(toast).toBeVisible();
    await expect(toast).toHaveText('Este item acabou de ser reservado por outro cliente.');
  });
});
