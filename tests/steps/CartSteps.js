const { createBdd } = require('playwright-bdd');
const { LoginPage } = require('../pages/LoginPage');
const { HomePage } = require('../pages/HomePage');
const { CartPage } = require('../pages/CartPage')
const { Given, When, Then, Before } = createBdd();
const { expect } = require('@playwright/test')

let loginPage
let homePage
let cartPage
Before(async({page})=>{
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
})

Given(`usuario se encuentra loggeado`, async({page}) => {
    await loginPage.navegar("https://www.saucedemo.com")
    await loginPage.ingresarUsuario("standard_user");
    await loginPage.ingresarPassword("secret_sauce");
    await loginPage.clickLogin();
    await loginPage.confirmarIngreso();
});

Given(`agrego multiples productos`, async({page}) => {
    await homePage.agregarMultiplesProductos(4);
});

When(`se hace click al carrito de compras`, async({page}) => {
    await cartPage.clickCarrito();
});

Then(`el contador muestra la misma cantidad de la lista`, async({page}) => {
    await cartPage.verificarProductos();
    const listCount = await cartPage.contarElementosLista();
    const badgeCount = await cartPage.contarElementosBadge();
    await expect(listCount).toBe(badgeCount);
});

When(`se verifica los productos seleccionados`, async({page}) => {
    await cartPage.verificarProductos();
    const listCount = await cartPage.contarElementosLista();
    const badgeCount = await cartPage.contarElementosBadge();
    await expect(listCount).toBe(badgeCount);
});

When(`se hace click en el boton Remove de un producto`, async({page}) => {
    await homePage.quitarUnicoProducto();
});

Then(`se actualiza lista del carrito`, async({}) => {
    await cartPage.verificarProductos();
    const listCount = await cartPage.contarElementosLista();
    const badgeCount = await cartPage.contarElementosBadge();
    await expect(listCount).toBe(badgeCount);
});

When(`se agrega informacion incompleta: {string}, {string}, {string}`, async({page}, nombre,apellido,zip) => {
    await cartPage.rellenarInfoFormulario(nombre,apellido,zip);
});


Then(`formulario muestra error: {string}`, async({page}, error) => {
    await cartPage.verificarMensajeError(error)
});

When(`se hace click en el boton {string}`, async({page}, boton) => {
    await cartPage.clickearBoton(boton);
});

When(`se completa informacion valida de usuario en formulario`, async({page}) => {
    await cartPage.rellenarInfoFormulario("TestOne", "TestOne", "12345");
});

When(`se revisa el resumen de compra`, async({page}) => {
    await cartPage.revisarTotalCompra();
});

Then(`mensaje de exito es desplegado`, async({page}) => {
    await cartPage.mostrarMensajeExito();
});