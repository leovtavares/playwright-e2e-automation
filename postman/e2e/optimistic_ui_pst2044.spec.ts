import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test.describe('Postman Web - Identity Module', () => {

  // Teste isolado e autenticado para provar o Defeito PST-2044
  test('PST-2044: Alteração de Perfil não deve causar Falso Positivo (Optimistic UI)', async ({ page, context }) => {
    
    // 1. [Security] Busca a credencial da variável de ambiente (CI/CD secrets)
    const sessionCookie = process.env.POSTMAN_SID;
    test.skip(!sessionCookie, 'Teste abortado: Variável POSTMAN_SID não configurada no ambiente.');

    // 2. Injeta a sessão para bypassar o Login
    await context.addCookies([{
      name: 'postman.sid',
      value: sessionCookie,
      domain: '.postman.co',
      path: '/'
    }]);

    // 3. Setup de Interceptação da Mutaçao via Proxy
    // Queremos capturar se a API está devolvendo 'success' de forma genérica
    let proxyRespondedWithSuccess = false;
    page.on('response', async (res) => {
      if (res.url().includes('_api/ws/proxy') && res.request().method() === 'POST') {
        const body = await res.text();
        if (body.includes('"result":"success"')) {
          proxyRespondedWithSuccess = true;
        }
      }
    });

    // 4. Navegar até a aba de Settings
    await page.goto('https://web.postman.co/settings/me', { waitUntil: 'load' });

    // 5. Interagir com o Formulário (Ponto do Falso Positivo)
    const bioTextarea = page.locator('textarea').first();
    await bioTextarea.waitFor({ state: 'visible' });
    
    const uniqueBio = `QA Automation Test Bio ${Date.now()}`;
    await bioTextarea.fill(uniqueBio);

    const updateBtn = page.getByRole('button', { name: /Update Profile|Save/i }).first();
    await updateBtn.click();

    // Aguarda o toast verde
    const successToast = page.locator('text="Updated your user profile", text="Success"');
    
    // Se o toast aparecer mas os dados sumirem depois, é um Bug crítico de UI
    try {
      await successToast.waitFor({ state: 'visible', timeout: 5000 });
    } catch(e: any) {
      console.log(`[PST-2044] Toast de sucesso não exibido no tempo limite. Detalhes: ${e.message}`);
    }

    // 6. VALIDAÇÃO DE PERSISTÊNCIA REAL (O Teste)
    // Se recarregarmos a página, o novo valor DEVE estar lá.
    await page.reload({ waitUntil: 'load' });
    
    // O teste irá FALHAR aqui pois sabemos (via Auditoria Manual) que o campo retorna vazio
    const bioAfterReload = page.locator('textarea').first();
    await expect(bioAfterReload).toHaveValue(uniqueBio, { 
      message: 'FALHA DE INTEGRIDADE (PST-2044): A UI reportou Sucesso, mas os dados não persistiram após o reload.' 
    });

  });

});
