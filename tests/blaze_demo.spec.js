// 1- referências e bibliotecas // declara um objeto chamado teste vindo da biblioteca playwright 
const { test, expect } = require('@playwright/test')
// 2- Classe ou funções ou Métodos 
// Um ​​script ou um programa pode executar de forma: 
// - Sincrona 
//  - Assincrona 
test('Realizar o fluxo de compra de passagens', async ({ page }) => {
    await page.goto('https://www.blazedemo.com/')// abre o navegador 
    await expect(page).toHaveURL('https://www.blazedemo.com/') // verifica se está na página raiz 
    const partida = page.locator('[name="fromPort"]')
    //constante seletor de voo de partida 
    await partida.selectOption({ label: 'Boston' })
    //seleciona cidade de partida
    const destino = page.locator('[name="toPort"]')
    //constante seletor de voo de destino 
    await destino.selectOption({ label: 'Rome' })
    //seleciona cidade de partida
    const botao = page.locator('.btn.btn-primary')
    await botao.click()
    //seleciona os voos e vai para a próxima página

    await expect(page).toHaveURL('https://www.blazedemo.com/reserve.php')
    // verifica se está na página de reserva 
    const voo = page.locator('.btn.btn-small').first()
    await voo.click()
    await expect(page).toHaveURL('https://www.blazedemo.com/purchase.php')
    // verifica se está na página de dados da compra do voo
    await page.fill('[name="inputName"]', 'Kamila Araujo')
    await page.fill('[name="address"]', 'Elmo Helio,648')
    await page.fill('[name="city"]', 'Patos de Minas')
    await page.fill('[name="state"]', 'Minas Gerais')
    await page.fill('[name="zipCode"]', '38705378')
    const cartao = page.locator('[name="cardType"]')
    //constante seletor de voo de partida 
    await cartao.selectOption('visa')
    await page.fill('[name="creditCardNumber"]', '371234567890123')
    await page.fill('[name="creditCardMonth"]', '03')
    await page.fill('[name="creditCardYear"]', '2031')
    await page.fill('[name="nameOnCard"]', 'Kamila Araujo')
    const encontrar = page.locator('.btn.btn-primary')
    await encontrar.click()


})
//final do teste
