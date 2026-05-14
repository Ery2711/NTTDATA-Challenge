const { createBdd } = require('playwright-bdd');
const { LoginPage } = require('../pages/LoginPage');
const { Given, When, Then, Before } = createBdd();
const { expect } = require('@playwright/test')

let loginPage
Before(async({page})=>{
    loginPage = new LoginPage(page);
})

Given('usuario ingresa a la pagina {string}', async({}, url) => {
    await loginPage.navegar(url);
})

When('agrega usuario {string}', async({}, usuario) => {
    await loginPage.ingresarUsuario(usuario);
})

When('agrega password {string}', async({}, password) => {
    await loginPage.ingresarPassword(password);
})

When('hace click al boton de Login', async({}) => {
    await loginPage.clickLogin();
})

Then('ingresa satisfactoriamente', async({}) => {
    const valorEsperado = await loginPage.confirmarIngreso();
    await expect(valorEsperado).toEqual('Products');
})

Then('mensaje de error es desplegado: {string}', async({}, error) => {
    const valorEsperado = await loginPage.validarMensajeError();
    await expect(valorEsperado).toEqual(error);
})