Feature: Adicion y extracción de productos en SauceDemo
    @Before(@login_requerido)
    Scenario: Agregar un producto al carrito
        Given usuario se ha logueado correctamente
        And pagina Products es desplegada
        When se agrega un solo producto
        Then el contador de items del carrito incrementa

    Scenario: Agregar mas de un producto al carrito
        Given usuario se ha logueado correctamente
        And pagina Products es desplegada
        When se agrega multiples productos
        Then el contador de items del carrito incrementa
    
    Scenario: Quitar productos del carrito
        Given usuario se ha logueado correctamente
        And pagina Products es desplegada
        When se agrega multiples productos
        And se retiran algunos productos del carrito
        Then el contador de items del carrito disminuye

    Scenario: Quitar todos los productos del carrito
        Given usuario se ha logueado correctamente
        And pagina Products es desplegada
        When se agrega y retira misma cantidad de productos
        Then el contador de items del carrito desaparece