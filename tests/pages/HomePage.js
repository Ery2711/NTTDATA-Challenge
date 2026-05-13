import {
    contarElementosAgregados,
    contarElementosRemovidos,
    generarElementos,
    quitarElementos
 } from "../support/customFunctions";

const { expect } = require('@playwright/test')

class HomePage {
    constructor(page) {
        this.page = page;
    }

    async validarPagina() {
        await this.page.locator("span[data-test='title']").isVisible();
    }

    async agregarUnicoProducto() {
        const unicoAgregar = await generarElementos(this.page,1);
        if(unicoAgregar){
            for (const el of unicoAgregar){
                if (/[.()]/.test(el.idReal)) {
                    const id = el.idReal.replace(/([.()])/g, '\\$1');
                    await this.page.locator(`button#${id}`).click();
                } else {
                await this.page.locator(`button[id="${el.idReal}"]`).click();}
            };
        }
    }

    async agregarMultiplesProductos(cantidad) {
        const multipleAgregar = await generarElementos(this.page,cantidad);
        if(multipleAgregar){
            for (const el of multipleAgregar){
                if (/[.()]/.test(el.idReal)) {
                    const id = el.idReal.replace(/([.()])/g, '\\$1');
                    await this.page.locator(`button#${id}`).click();
                } else {
                await this.page.locator(`button[id="${el.idReal}"]`).click();}
            };
        }
    }

    async quitarUnicoProducto() {
        const unicoQuitar = await quitarElementos(this.page,1);
        if(unicoQuitar){
            for (const el of unicoQuitar){
                if (/[.()]/.test(el.idReal)) {
                    const id = el.idReal.replace(/([.()])/g, '\\$1');
                    await this.page.locator(`button#${id}`).click();
                } else {
                await this.page.locator(`button[id="${el.idReal}"]`).click();}
            };
        }
    }

    async quitarMultiplesProductos(cantidad) {
        const multipleQuitar = await quitarElementos(this.page,cantidad);
        if(multipleQuitar){
            for (const el of multipleQuitar){
                if (/[.()]/.test(el.idReal)) {
                    const id = el.idReal.replace(/([.()])/g, '\\$1');
                    await this.page.locator(`button#${id}`).click();
                } else {
                await this.page.locator(`button[id="${el.idReal}"]`).click();}
            };
        }
    }

    async validarAumento(){
        const locator = this.page.locator('a>span.shopping_cart_badge');
        if (await locator.isVisible()){const productosAdd = await contarElementosAgregados(this.page);
            const contador = await locator.innerText();
            await expect(productosAdd).toBe(parseInt(contador, 10))
        } else {
            throw new Error("El badge del carrito no es visible.");
        }
    }

    async validarDisminucion(){
        const locator = this.page.locator('a>span.shopping_cart_badge');
        if (await locator.isVisible()){
            const productosAdd = await contarElementosAgregados(this.page);
            const contador = await locator.innerText();
            await expect(productosAdd).toBe(parseInt(contador, 10))
        } else {
            throw new Error("El badge del carrito no es visible.");
        }
    }
    
    async validarCarritoVacio(){
        const locator = this.page.locator('a>span.shopping_cart_badge');
        await expect(locator).toBeHidden({
            message: "Badge del carrito ya no es visible"
        })
    }
}

module.exports = { HomePage };