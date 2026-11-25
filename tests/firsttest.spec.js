const { test, expect } = require('@playwright/test');

test('login page has the expected title', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await expect(page).toHaveTitle('LoginPage Practise | Rahul Shetty Academy');
  console.log(await page.title());
});