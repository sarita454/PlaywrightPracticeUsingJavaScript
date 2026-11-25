const {test, expect} = require('@playwright/test');

test('extract text from element', async ({page}) => {
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#signInBtn').click();
    const errorText = await (page.locator('[style*="block"]').textContent());
    await page.pause();
    console.log(errorText);
    await expect(errorText).toContain('Empty');
})