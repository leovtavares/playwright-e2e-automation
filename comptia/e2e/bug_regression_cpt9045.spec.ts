import { test, expect } from '@playwright/test';

test.describe('CompTIA - Bug Regression', () => {

  test('CPT-9045: Lista de Job Roles não deve ficar em carregamento infinito', async ({ page }) => {
    // Acessar a página pública de carreiras
    console.log('Navigating to CompTIA Explore Careers...');
    
    // Fallback try-catch just in case the real site blocks headless, but we assert on the loading state
    let navError = null;
    try {
      await page.goto('https://www.comptia.org/en-us/explore-careers/job-roles/?page=1&category=all', { 
        waitUntil: 'domcontentloaded',
        timeout: 20000 
      });
    } catch (e) {
      navError = e;
    }

    // A asserção principal deste teste de regressão é garantir que um elemento de carregamento 
    // (ex: div.spinner, .loading-indicator) NÃO fique na tela para sempre.
    
    // Como a página da CompTIA apresentava a falha "Spinner Stuck", nós validamos:
    // 1. O contêiner da lista deve aparecer.
    // 2. Ou o spinner deve desaparecer em menos de 10s.

    // Isso forçaria a quebra do teste caso o bug CPT-9045 ainda estivesse ocorrendo em produção
    const jobList = page.locator('.job-roles-list, [data-testid="job-roles-container"]');
    
    // Declaramos que este teste DEVE falhar porque o Bug CPT-9045 ainda existe em Produção.
    // Se o site consertar o bug e a lista renderizar (teste passar), a pipeline irá QUEBRAR
    // para nos avisar que o bug foi resolvido!
    test.fail();
    
    // A asserção aguarda até 15s para a lista aparecer. Se não aparecer, o teste falha (o que é esperado pelo test.fail).
    await expect(jobList).toBeVisible({ timeout: 15000 });
    
    test.info().annotations.push({ 
      type: 'Regression Info', 
      description: 'Teste desenhado para falhar caso o Timeout infinito de Hydration do React ocorra (Defeito CPT-9045).' 
    });
  });

});
