// 1- referências e bibliotecas // declara um objeto chamado teste vindo da biblioteca playwright 
const { test, expect } = require('@playwright/test')
// 2- Classe ou funções ou Métodos 
// Um ​​script ou um programa pode executar de forma: 
// - Sincrona 
//  - Assincrona 
test('Realizar o fluxo de compra de passagens', async ({ page }) => {
    await page.goto('https://www.blazedemo.com/')// abre o navegador 
    await page.locator('a[href="home"]').click()
    //seletor home
    await page.locator('a[href="https://www.blazedemo.com/register"]').click()
    await page.fill('[name="name"]', 'Kamila Araujo')
    await page.fill('[name="company"]', 'Vasp')
    await page.fill('[name="email"]', 'kamila.joice880@gmail.com')
    await page.fill('[name="password"]', 'Senha!123')
    await page.fill('[name="password_confirmation"]', 'Senha!123')
    await page.locator('.btn.btn-primary').click()

    
})