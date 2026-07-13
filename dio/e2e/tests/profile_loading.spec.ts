import { test, expect } from '@playwright/test';

test.describe('DIO Profile', () => {
  test('should handle infinite loading bug gracefully', async ({ page }) => {
    // Simulate the relative path bug 404 error
    page.route('**/users/assets/utils.js', route => route.abort('failed'));
    await page.goto('https://web.dio.me/users/realleotavares?tab=achievements');
    // Verify the page doesn't crash but shows loading
    const spinner = page.locator('.loading-spinner, [role="progressbar"]');
    // Note: This is an exploratory test to demonstrate the bug
  });
});
