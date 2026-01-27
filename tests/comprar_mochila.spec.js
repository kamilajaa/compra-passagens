// 1- referências e bibliotecas // declara um objeto chamado teste vindo da biblioteca playwright 
const { test, expect } = require('@playwright/test')
// 2- Classe ou funções ou Métodos 
// Um ​​script ou um programa pode executar de forma: 
// - Sincrona 
//  - Assincrona 
test('Realizar o fluxo de compra da mochila', async ({ page }) => {
    await page.goto('https://www.saucedemo.com')// abre o navegador 
    await expect(page).toHaveURL(' https://www.saucedemo.com/') // verifica se está na página raiz 
    const botao_login = page.locator('#login-button')
    await expect(botao_login).toHaveText('Login') // verifica o elemento escrito login

    // Realizar o login
    //Preencher o campo cujo o localizador é name com o valor standard_user 
    await page.fill('[name="user-name"]', 'standard_user')
    //Preencher o campo cujo o localizador é cssSelector com o valor secret_sauce
    await page.fill('[placeholder="Password"]', 'secret_sauce')
    // clicar botao login  
    await botao_login.click()
    //pagina de inventário / produtos
    //verificar se está na página certa
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
    const tituloSessao = 'span.title' //cssSelector
    await expect(page.locator(tituloSessao)).toHaveText('Products')

    //adicionar a mochila ao carrinho de compras
    const btnAdicionar = 'xpath=/html/body/div/div/div/div[2]/div/div/div/div[1]/div[2]/div[2]/button'
    await page.locator(btnAdicionar).click()
    //verificar se exibe o numero 01 no carrinho de compras
    const icoQuantCarrinho = 'span.shopping_cart_badge' //cssSelector
    await expect(page.locator(icoQuantCarrinho)).toHaveText('1')
    //Clicar no icone do carrinho (n° 1)
    await page.locator(icoQuantCarrinho).click()


    //verificar se está na página certa
    await expect(page).toHaveURL(/.*cart/)
    //titulo seção permanece igual ao da página Inventory
    await expect(page.locator(tituloSessao)).toHaveText('Your Cart')
    //verificar dados funcionais 
    await expect(page.locator('.cart_quantity')).toHaveText('1')
    await expect(page.locator('.inventory_item_name')).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('.inventory_item_price')).toHaveText('$29.99')
    await page.waitForTimeout(1000)
})
//final do teste
