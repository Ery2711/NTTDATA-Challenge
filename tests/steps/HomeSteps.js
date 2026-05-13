const { createBdd } = require('playwright-bdd');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { Given, When, Then, Before } = createBdd();
const { expect } = require('@playwright/test')

let homePage
let loginPage;
Before(async({page})=>{
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
})

Given(`usuario se ha logueado correctamente`, async({}) => {
    await loginPage.navegar("https://www.saucedemo.com")
    await loginPage.ingresarUsuario("standard_user");
    await loginPage.ingresarPassword("secret_sauce");
    await loginPage.clickLogin();
});

Given(`pagina Products es desplegada`, async({}) => {
    await homePage.validarPagina();
});

When(`se agrega un solo producto`, async({}) => {
    await homePage.agregarUnicoProducto()
});

Then(`el contador de items del carrito incrementa`, async({}) => {
    await homePage.validarAumento();
});

When(`se agrega multiples productos`, async({}) => {
    await homePage.agregarMultiplesProductos(3)
});

When(`se retira un producto`, async({}) => {
    await homePage.quitarUnicoProducto()
});

Then(`el contador de items del carrito disminuye`, async({}) => {
    await homePage.validarDisminucion();
});

When(`se retiran algunos productos del carrito`, async({}) => {
    await homePage.quitarMultiplesProductos(2)
});

When(`se agrega y retira misma cantidad de productos`, async({}) => {
    await homePage.agregarMultiplesProductos(3);
    await homePage.validarAumento();
    await homePage.quitarMultiplesProductos(3)
});

Then(`el contador de items del carrito desaparece`, async({}) => {
    await homePage.validarCarritoVacio();
});