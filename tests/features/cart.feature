Feature: Validacion de compras
    Scenario: Verificar productos elegidos en el carrito
        Given usuario se encuentra loggeado
        And agrego multiples productos
        When se hace click al carrito de compras
        Then el contador muestra la misma cantidad de la lista

    Scenario: Eliminar producto del carrito
        Given usuario se encuentra loggeado
        And agrego multiples productos
        When se hace click al carrito de compras
        And se verifica los productos seleccionados
        And se hace click en el boton Remove de un producto
        Then se actualiza lista del carrito

    Scenario Outline: Verificar campos requeridos de informacion de usuario
        Given usuario se encuentra loggeado
        And agrego multiples productos
        When se hace click al carrito de compras
        And se verifica los productos seleccionados
        And se hace click en el boton 'Checkout'
        And se agrega informacion incompleta: '<nombre>', '<apellido>', '<zip>'
        And se hace click en el boton "Continue"
        Then formulario muestra error: '<error>'
        Examples:
        |nombre|apellido|zip|error|
        ||testOne|07001|Error: First Name is required|
        |testTwo||07001|Error: Last Name is required|
        |testThree|testThree||Error: Postal Code is required|

    Scenario: Checkout de productos
        Given usuario se encuentra loggeado
        And agrego multiples productos
        When se hace click al carrito de compras
        And se verifica los productos seleccionados
        And se hace click en el boton 'Checkout'
        And se completa informacion valida de usuario en formulario
        And se hace click en el boton 'Continue'
        And se revisa el resumen de compra
        And se hace click en el boton 'Finish'
        Then mensaje de exito es desplegado