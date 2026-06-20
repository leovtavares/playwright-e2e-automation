import { test, expect } from '@playwright/test';

test.describe('Localization - Redirecionamento de Idioma (PT-BR)', () => {
  // Simulando um navegador configurado em Português
  test.use({ locale: 'pt-BR' });

  test('Deve carregar a versão em Português quando o locale for pt-BR', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao português
    await expect(page.locator('html')).toHaveAttribute('lang', /pt/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contato')).toBeVisible(); 
  });
});

test.describe('Localization - Language Redirection (EN-US)', () => {
  // Simulando um navegador configurado em Inglês
  test.use({ locale: 'en-US' });

  test('Should load English version when locale is en-US', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao inglês
    await expect(page.locator('html')).toHaveAttribute('lang', /en/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contact')).toBeVisible();
  });
});
