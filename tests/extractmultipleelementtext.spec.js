const {test, expect} = require('@playwright/test');

test('extract text from multiple elements', async ({page}) => {

    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    const userName = page.locator('#username');
    const password = page.locator('#password');
    const signInBtn = page.locator('#signInBtn');
    const products = page.locator('div.card-body a');

    await userName.fill('rahulshettyacademy');
    await password.fill('Learning@830$3mK2');
    await signInBtn.click();

    await expect(products).toHaveCount(4);
    const count= await products.count()
    const productsList = await products.allTextContents();
    console.log(count);
    console.log(productsList);

    




})