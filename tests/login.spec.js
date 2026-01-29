const { test, expect } = require('@playwright/test')
test('Realizar o fluxo de compra de passagens', async ({ page }) => {
    await page.goto('https://www.blazedemo.com/')// abre o navegador 
    await page.locator('a[href="home"]').click()
    //seletor home
    await page.fill('[name="email"]', 'kamila.joice880@gmail.com')
    await page.fill('[name="password"]', 'Senha!123')
    await page.locator('.btn.btn-primary').click()
    
})
// final do teste
