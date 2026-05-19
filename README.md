# 🛒 Compra de Passagens - Automação E2E

&gt; Automação de testes end-to-end com Playwright. Testes para BlazeDemo (passagens aéreas) e SauceDemo (e-commerce).

---

## 📋 Projetos incluídos

### 1. BlazeDemo - Reserva de Passagens
Site: [blazedemo.com](https://www.blazedemo.com)

**Testes:**

| Arquivo | Cenário |
|---------|---------|
| `blaze_demo.spec.js` | Fluxo completo: busca voo, seleciona, preenche dados e finaliza compra |
| `cadastro_usuario.spec.js` | Cadastro de novo usuário no site |
| `login.spec.js` | Login com usuário existente |

**Fluxo completo (`blaze_demo.spec.js`):**
1. Acessa o site
2. Seleciona origem: **Boston**
3. Seleciona destino: **Rome**
4. Busca voos disponíveis
5. Escolhe primeiro voo
6. Preenche dados pessoais e cartão (Visa)
7. Finaliza compra

---

### 2. SauceDemo - E-commerce
Site: [saucedemo.com](https://www.saucedemo.com)

**Teste:**

| Arquivo | Cenário |
|---------|---------|
| `comprar_mochila.spec.js` | Login + adiciona mochila ao carrinho + valida dados |

**Fluxo (`comprar_mochila.spec.js`):**
1. Acessa a página de login
2. Realiza login com `standard_user`
3. Verifica acesso à página de produtos
4. Adiciona **Sauce Labs Backpack** ao carrinho
5. Verifica badge do carrinho (quantidade: 1)
6. Acessa página do carrinho
7. Valida produto, quantidade e preço ($29.99)

---

## 🚀 Como rodar

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm instalado

### Instalar dependências
```bash
npm install
npx playwright install
