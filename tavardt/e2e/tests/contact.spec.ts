import { test, expect } from '@playwright/test';

test.describe('Formulário de Contato - Validações', () => {
  
  test.beforeEach(async ({ page }) => {
    // Navegar para a página principal (ou página específica de contato)
    await page.goto('/');
  });

  test('Deve exibir mensagens de erro ao tentar submeter o formulário vazio', async ({ page }) => {
    // Placeholder: Localizar e clicar no botão de submissão do formulário
    // const submitButton = page.locator('button[type="submit"]');
    // await submitButton.click();
    
    // Validar se as mensagens de erro de "campo obrigatório" são exibidas
    // Exemplo de asserção:
    // await expect(page.locator('text=O campo nome é obrigatório')).toBeVisible();
    
    console.log('Test case [Submissão Vazia] estruturado.');
  });

  test('Deve preencher e validar os inputs do formulário com sucesso', async ({ page }) => {
    // Placeholder: Interagindo com os inputs
    // await page.fill('input[name="name"]', 'Analista QA (Teste Automatizado)');
    // await page.fill('input[name="email"]', 'qa-teste@tavardt.com');
    // await page.fill('input[name="company"]', 'Google');
    // await page.fill('select[name="service"]', 'Todos / Outros');
    // await page.fill('textarea[name="message"]', 'Testando pipeline automatizado com Playwright.');
    
    // await page.locator('button[type="submit"]').click();
    
    // Validar a resposta visual de sucesso
    // await expect(page.locator('text=Mensagem enviada com sucesso')).toBeVisible();
    
    console.log('Test case [Submissão com Sucesso] estruturado.');
  });
});
