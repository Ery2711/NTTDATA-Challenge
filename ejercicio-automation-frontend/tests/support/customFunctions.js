export const obtenerListaProductos = async (page) => {
    return await page.evaluate(() => {
        // Todo lo que esté aquí adentro SÍ tiene acceso a 'document'
        const productElements = document.querySelectorAll('.inventory_item_description');
        return Array.from(productElements).map(el => ({
            nombre: el.querySelector('.inventory_item_name')?.innerText.trim(),
            descripcion: el.querySelector('.inventory_item_description')?.innerText.trim(),
            precio: parseFloat(el.querySelector('.inventory_item_price')?.innerText.replace('$', ''))
        }));
    });
};

/**
 * Genera una lista de objetos con la información de productos seleccionados aleatoriamente.
 */
export const generarElementos = async (page, cantidad) => {
    return await page.evaluate((cant) => {
        // Buscamos los contenedores de los productos para extraer info y el botón
        const items = Array.from(document.querySelectorAll('.inventory_item'));
        
        if (items.length < cant) return null;

        const listaAgregar = [];
        const itemsCopia = [...items].sort(() => 0.5 - Math.random()); // Mezcla aleatoria

        for (let i = 0; i < cant; i++) {
            const elegido = itemsCopia[i];
            const boton = elegido.querySelector('button[id^="add-to-cart-"]');
            
            listaAgregar.push({
                nombre: elegido.querySelector('.inventory_item_name')?.innerText.trim(),
                // Guardamos el ID real del DOM para no tener que adivinarlo luego
                idReal: boton?.id 
            });
        }
        return listaAgregar;
    }, cantidad);
};

/**
 * Selecciona aleatoriamente qué elementos remover de los que ya están en el carrito.
 */
export const quitarElementos = async (page, cantidad) => {
    return await page.evaluate((cant) => {
        const botonesRemover = Array.from(document.querySelectorAll('button[id*="remove-"]'));
        
        if (botonesRemover.length < cant) return null;

        const listaQuitar = [];
        for (let i = 0; i < cant; i++) {
            const indiceAleatorio = Math.floor(Math.random() * botonesRemover.length);
            const botonElegido = botonesRemover.splice(indiceAleatorio, 1)[0];
            
            listaQuitar.push({
                idReal: botonElegido.id,
                // Buscamos el nombre del producto relacionado para validar si hace falta
                nombre: botonElegido.closest('.inventory_item_description')?.querySelector('.inventory_item_name')?.innerText
            });
        }
        return listaQuitar;
    }, cantidad);
};

/**
 * Cuenta cuántos botones de "Remove" existen actualmente en el DOM.
 */
export const contarElementosAgregados = async (page) => {
    return await page.evaluate(() => {
        return document.querySelectorAll('button[id*="remove-"]').length;
    });
};

export const contarElementosRemovidos = async (page) => {
    return await page.evaluate(() => {
        return document.querySelectorAll('button[id*="add-to-cart-"]').length;
    });
};