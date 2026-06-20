import { test, expect } from '@playwright/test';

test.describe('Localization - Redirecionamento de Idioma (PT-BR)', () => {
  // Simulando um navegador configurado em Português (Brasil)
  test.use({ locale: 'pt-BR' });

  test('Deve carregar a versão em Português quando o locale for pt-BR', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao português pt-BR
    await expect(page.locator('html')).toHaveAttribute('lang', /pt-br/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contato')).toBeVisible(); 
  });
});

test.describe('Localization - Redirecionamento de Idioma (PT)', () => {
  // Simulando um navegador configurado em Português (Portugal)
  test.use({ locale: 'pt' });

  test('Deve carregar a versão em Português quando o locale for pt', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao português - pt
    await expect(page.locator('html')).toHaveAttribute('lang', /pt/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contacto')).toBeVisible(); 
  });
});

test.describe('Localization - Redirecionamento de Idioma (ES)', () => {
  // Simulando um navegador configurado em Espanhol
  test.use({ locale: 'es' });

  test('Deve carregar a versão em Espanhol quando o locale for es', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao espanhol
    await expect(page.locator('html')).toHaveAttribute('lang', /es/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contacto')).toBeVisible(); 
  });
});

test.describe('Localization - Redirecionamento de Idioma (FR)', () => {
  // Simulando um navegador configurado em Francês
  test.use({ locale: 'fr' });

  test('Deve carregar a versão em Francês quando o locale for fr', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao francês
    await expect(page.locator('html')).toHaveAttribute('lang', /fr/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contact')).toBeVisible(); 
  });
});

test.describe('Localization - Redirecionamento de Idioma (IT)', () => {
  // Simulando um navegador configurado em Francês
  test.use({ locale: 'it' });

  test('Deve carregar a versão em Italiano quando o locale for it', async ({ page }) => {
    // Acessa a raiz do site
    await page.goto('/');
    
    // Como QA, avaliamos o comportamento visível e estrutural
    // Verifica se a tag <html> recebeu o atributo lang correspondente ao italiano
    await expect(page.locator('html')).toHaveAttribute('lang', /it/i);
    
    // Validação visual (Placeholder - ajuste para o texto real do site)
    // await expect(page.locator('text=Contatti')).toBeVisible(); 
  });
});
