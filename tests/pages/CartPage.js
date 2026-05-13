const { expect } = require('@playwright/test');
const { LoginPage } = require('./LoginPage');

class CartPage {
    constructor(page) {
        this.page = page;
    }

    async clickCarrito() {
        const carrito = await this.page.locator("a.shopping_cart_link")
        await carrito.click();
    }

    async clickearBoton(boton){
        // Intentar encontrar el botón por ID, luego por texto
        const botonId = boton.toLowerCase();
        let botonLocator = this.page.locator(`button#${botonId}`);
        
        // Si no encuentra por ID, buscar por texto (case-insensitive)
        const count = await botonLocator.count();
        if (count === 0) {
            botonLocator = this.page.locator(`input[value="${boton}"]`);
        }
        
        // Esperar a que esté visible y clickeable
        await botonLocator.waitFor({ state: 'visible', timeout: 5000 });
        await botonLocator.click();
    }

    async verificarProductos(){
        const productElements = await this.page.locator('.cart_item').all();
        const lista = await Promise.all(productElements.map(async (el) => {
            const nombre = await el.locator('a[id*="title_link"]').innerText();
            const precio = parseFloat(await el.locator('div.inventory_item_price').innerText().then(t => t.replace('$', '')));
            return { nombre, precio };
        }));
        return lista;
    }

    async contarElementosLista(){
        const productElements = await this.page.locator('.cart_item').all();
        return productElements.length;
    }

    async contarElementosBadge(){
        const badgeLocator = this.page.locator('span.shopping_cart_badge');
        if (await badgeLocator.isVisible()) {
            const countText = await badgeLocator.innerText();
            console.log("Se tienen " + countText + " productos en el carrito");
            return parseInt(countText);
        }
    }

    async calcularSubtotal(){
        const elementos = await this.verificarProductos();
        const subtotal = elementos.reduce((acc, el) => acc + el.precio, 0);
        return subtotal;
    }

    async rellenarInfoFormulario(nombre, apellido, zip) {
        await this.page.locator('[data-test="firstName"]').fill(nombre);
        await this.page.locator('[data-test="lastName"]').fill(apellido);
        await this.page.locator('[data-test="postalCode"]').fill(zip);
    }

    async verificarMensajeError(error) {
        await expect(this.page.locator('h3[data-test="error"]')).toHaveText(error);
    }

    async revisarTotalCompra(){
        const subtotal = await this.calcularSubtotal();
        const tax = parseFloat(await this.page.locator('.summary_tax_label').innerText().then(t => t.replace('Tax: $', '')));
        const total = parseFloat(await this.page.locator('.summary_total_label').innerText().then(t => t.replace('Total: $', '')));
        const totalCalculado = parseFloat((subtotal + tax).toFixed(2));
        console.log(`Subtotal calculado: $${subtotal}, Tax: $${tax}, Total calculado: $${totalCalculado}, Total mostrado: $${total}`);
        await expect(total).toBe(totalCalculado);
    }

    async mostrarMensajeExito(){
        const mensaje = await this.page.locator('h2.complete-header').innerText();
        await expect(this.page.locator('h2.complete-header')).toHaveText('Thank you for your order!');
    }
}

module.exports = { CartPage };