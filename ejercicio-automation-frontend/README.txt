================================================================================
                    PROYECTO DE PRUEBAS AUTOMATIZADAS - SAUCEDEMO
                           NTTDATA CHALLENGE V1.0.0
================================================================================

DESCRIPCION GENERAL
================================================================================
Este proyecto es un conjunto de pruebas automatizadas para la plataforma 
SauceDemo (https://www.saucedemo.com). Las pruebas validan las funcionalidades 
principales de compra en linea: inicio de sesion, agregar/remover productos, 
y procesos de checkout.

El proyecto utiliza:
- Playwright: herramienta para automatizar navegadores
- Cucumber/BDD: escribir pruebas en lenguaje natural
- Node.js: entorno de ejecucion

================================================================================
ESTRUCTURA DEL PROYECTO
================================================================================

proyecto/
  |
  +-- tests/
  |    |
  |    +-- features/          (Definiciones de pruebas en lenguaje natural)
  |    |    +-- login.feature
  |    |    +-- home.feature
  |    |    +-- cart.feature
  |    |
  |    +-- pages/             (Logica de interaccion con la aplicacion)
  |    |    +-- LoginPage.js
  |    |    +-- HomePage.js
  |    |    +-- CartPage.js
  |    |
  |    +-- steps/             (Implementacion de los pasos de prueba)
  |    |    +-- LoginSteps.js
  |    |    +-- HomeSteps.js
  |    |    +-- CartSteps.js
  |    |
  |    +-- support/           (Funciones auxiliares)
  |         +-- customFunctions.js
  |
  +-- playwright.config.js    (Configuracion de Playwright)
  +-- package.json            (Dependencias del proyecto)

================================================================================
DESCRIPCION DE CARPETAS Y ARCHIVOS
================================================================================

1. CARPETA: tests/features
   ================================================================================
   Contiene los archivos ".feature" que describen las pruebas en lenguaje Gherkin
   (lenguaje similar al español/ingles para pruebas).

   ARCHIVO: login.feature
   ---------
   Valida todos los escenarios de inicio de sesion:
   
   Escenarios incluidos:
   - Inicio de sesion con credenciales validas
   - Inicio de sesion con multiples usuarios validos
   - Intento de sesion con usuario bloqueado
   - Intento de sesion con credenciales invalidas
   - Intento de sesion sin proporcionar credenciales
   
   Usuarios disponibles en SauceDemo:
   - standard_user (usuario valido)
   - problem_user (usuario con problemas de rendering)
   - error_user (usuario con errores)
   - visual_user (usuario con diferencias visuales)
   - locked_out_user (usuario bloqueado)
   - Usuarios invalidos para probar errores


   ARCHIVO: home.feature
   ---------
   Valida la adicion y extraccion de productos en la pagina principal:
   
   Escenarios incluidos:
   - Agregar un unico producto al carrito
   - Agregar multiples productos al carrito
   - Quitar producto(s) del carrito
   - Quitar todos los productos del carrito
   - Verificar que el contador del carrito se actualiza correctamente


   ARCHIVO: cart.feature
   ---------
   Valida la funcionalidad completa del carrito de compras:
   
   Escenarios incluidos:
   - Verificar que los productos en el carrito coinciden con los seleccionados
   - Eliminar un producto del carrito
   - Validar campos requeridos en el formulario de checkout
   - Proceso completo de compra desde carrito hasta confirmacion


2. CARPETA: tests/pages
   ================================================================================
   Contiene la logica que interactua con la interfaz grafica de la aplicacion.
   Cada archivo "Page" representa una pagina o seccion de la aplicacion.

   ARCHIVO: LoginPage.js
   ---------
   Maneja todas las interacciones en la pagina de login:
   
   Funciones principales:
   - navegar(url): Abre la pagina de SauceDemo
   - ingresarUsuario(usuario): Escribe el nombre de usuario
   - ingresarPassword(contrasena): Escribe la contrasena
   - clickLogin(): Hace clic en el boton de inicio de sesion
   - confirmarIngreso(): Verifica que la sesion fue exitosa
   - validarMensajeError(): Captura mensajes de error


   ARCHIVO: HomePage.js
   ---------
   Maneja la interaccion con la pagina de productos:
   
   Funciones principales:
   - validarPagina(): Verifica que la pagina de productos cargue correctamente
   - agregarUnicoProducto(): Agrega 1 producto al carrito de forma aleatoria
   - agregarMultiplesProductos(cantidad): Agrega la cantidad especificada
   - quitarUnicoProducto(): Remueve 1 producto del carrito
   - quitarMultiplesProductos(cantidad): Remueve la cantidad especificada
   - validarAumento(): Verifica que el contador aumento
   - validarDisminucion(): Verifica que el contador disminuyo
   - validarCarritoVacio(): Verifica que no haya productos en el carrito


   ARCHIVO: CartPage.js
   ---------
   Maneja todas las interacciones en el carrito y checkout:
   
   Funciones principales:
   - clickCarrito(): Abre el carrito de compras
   - clickearBoton(nombre): Hace clic en botones (Checkout, Continue, Finish)
   - verificarProductos(): Obtiene la lista de productos en el carrito
   - contarElementosLista(): Cuenta los productos en la lista del carrito
   - contarElementosBadge(): Lee el numero del badge (contador) del carrito
   - calcularSubtotal(): Suma los precios de todos los productos
   - rellenarInfoFormulario(nombre, apellido, zip): Completa datos del comprador
   - verificarMensajeError(mensaje): Verifica mensajes de error en el formulario
   - revisarTotalCompra(): Valida que el total sea correcto (subtotal + impuestos)
   - mostrarMensajeExito(): Confirma que el pago fue procesado


3. CARPETA: tests/steps
   ================================================================================
   Contiene la implementacion de cada paso definido en los archivos ".feature".
   Conecta el lenguaje natural de las pruebas con el codigo que las ejecuta.

   ARCHIVO: LoginSteps.js
   ---------
   Implementa los pasos de login:
   
   Pasos definidos:
   - Given: usuario ingresa a la pagina
   - When: agrega usuario
   - When: agrega password
   - When: hace click al boton de Login
   - Then: ingresa satisfactoriamente
   - Then: mensaje de error es desplegado


   ARCHIVO: HomeSteps.js
   ---------
   Implementa los pasos de la pagina principal de productos:
   
   Pasos definidos:
   - Given: usuario se ha logueado correctamente
   - Given: pagina Products es desplegada
   - When: se agrega un solo producto
   - When: se agrega multiples productos
   - When: se retira un producto
   - When: se retiran algunos productos del carrito
   - When: se agrega y retira misma cantidad de productos
   - Then: el contador de items del carrito incrementa
   - Then: el contador de items del carrito disminuye
   - Then: el contador de items del carrito desaparece


   ARCHIVO: CartSteps.js
   ---------
   Implementa los pasos del carrito de compras:
   
   Pasos definidos:
   - Given: usuario se encuentra loggeado
   - Given: agrego multiples productos
   - When: se hace click al carrito de compras
   - When: se verifica los productos seleccionados
   - When: se hace click en el boton (Checkout, Continue, Finish)
   - When: se agrega informacion incompleta
   - When: se completa informacion valida de usuario en formulario
   - When: se revisa el resumen de compra
   - When: se hace click en el boton Remove de un producto
   - Then: el contador muestra la misma cantidad de la lista
   - Then: se actualiza lista del carrito
   - Then: formulario muestra error
   - Then: mensaje de exito es desplegado


4. CARPETA: tests/support
   ================================================================================
   Contiene funciones auxiliares reutilizables para las pruebas.

   ARCHIVO: customFunctions.js
   ---------
   Funciones para interactuar con el DOM de la pagina:
   
   Funciones principales:
   - obtenerListaProductos(): Obtiene la lista completa de productos disponibles
   - generarElementos(cantidad): Selecciona aleatoriamente N productos para agregar
   - quitarElementos(cantidad): Selecciona aleatoriamente N productos para remover
   - contarElementosAgregados(): Cuenta cuantos "Remove" hay en el carrito
   - contarElementosRemovidos(): Cuenta cuantos "Add to cart" siguen disponibles


5. ARCHIVO RAIZ: playwright.config.js
   ================================================================================
   Configuracion general de Playwright:
   - Define donde estan los archivos de features y steps
   - Configura el navegador a usar (Chromium por defecto)
   - Define reportes en HTML
   - Configura reintentos para CI/CD
   - Define ejecucion paralela de pruebas


6. ARCHIVO RAIZ: package.json
   ================================================================================
   Administra las dependencias del proyecto:
   - @playwright/test: Framework de pruebas Playwright
   - playwright-bdd: Integracion de BDD con Playwright
   - @cucumber/cucumber: Interpretador de archivos .feature


================================================================================
COMO EJECUTAR LAS PRUEBAS
================================================================================

Paso 1: Instalar dependencias
   npm install

Paso 1.1: Instalar la libreria de BDD
   npm install --save-dev playwright-bdd

Paso 2: Generar archivos de prueba desde features
   npx bddgen

Paso 3: Ejecutar las pruebas
   
   Opcion A - Interfaz grafica (UI Mode):
   npx playwright test --ui
   
   Opcion B - Terminal:
   npx playwright test
   
   Opcion C - Pruebas especificas:
   npx playwright test login.feature
   npx playwright test home.feature
   npx playwright test cart.feature

Paso 4: Ver reporte de resultados
   npx playwright show-report


================================================================================
CASOS DE PRUEBA PRINCIPALES
================================================================================

SECCION 1: PRUEBAS DE LOGIN
================================================================================
Objetivo: Validar que el sistema autentique usuarios correctamente

Casos:
1. Login valido con credenciales correctas
   - Resultado esperado: Acceso a pagina de productos

2. Login con multiples usuarios validos
   - Usuarios: problem_user, error_user, visual_user
   - Resultado esperado: Todos logran acceso

3. Login con usuario bloqueado
   - Usuario: locked_out_user
   - Resultado esperado: Mensaje de error

4. Login con credenciales invalidas
   - Resultado esperado: Mensaje de error

5. Login sin credenciales
   - Resultado esperado: Mensaje de error

Estado: COMPLETO


SECCION 2: PRUEBAS DE ADICION/REMOVER PRODUCTOS
================================================================================
Objetivo: Validar que los productos se agreguen/remuevan correctamente

Casos:
1. Agregar un producto
   - Resultado esperado: Contador incrementa en 1

2. Agregar multiples productos (3)
   - Resultado esperado: Contador incrementa en 3

3. Remover un producto
   - Resultado esperado: Contador disminuye

4. Remover multiples productos (2)
   - Resultado esperado: Contador disminuye

5. Agregar y remover misma cantidad
   - Resultado esperado: Contador vuelve a cero y desaparece

Estado: COMPLETO


SECCION 3: PRUEBAS DE CARRITO DE COMPRAS
================================================================================
Objetivo: Validar que el carrito funcione correctamente

Casos:
1. Verificar productos en carrito
   - Resultado esperado: Contador badge coincide con lista de productos

2. Eliminar producto del carrito
   - Resultado esperado: Producto se remueve de la lista

3. Validar campos requeridos
   - Campos: Nombre, Apellido, Codigo Postal
   - Resultado esperado: Mensaje de error para cada campo vacio

4. Proceso de checkout completo
   - Resultado esperado: Mensaje de confirmacion "Thank you for your order!"

5. Validacion de totales
   - Resultado esperado: Subtotal + Impuestos = Total mostrado

Estado: COMPLETO


================================================================================
DATOS DE PRUEBA
================================================================================

Sitio web bajo prueba:
- URL: https://www.saucedemo.com
- Usuario de prueba: standard_user
- Contrasena: secret_sauce

Usuarios especiales disponibles:
- problem_user: Usuario que funcionara (uso diverso)
- error_user: Usuario que mostrara errores ocasionales
- visual_user: Usuario con diferencias de renderizado
- locked_out_user: Usuario bloqueado (no podra ingresar)

Datos para formulario de checkout:
- Nombre: TestOne
- Apellido: TestOne
- Codigo Postal: 12345


================================================================================
FUNCIONALIDADES CLAVE DEL AUTOMATISMO
================================================================================

1. SELECCION ALEATORIA DE PRODUCTOS
   - Las pruebas seleccionan productos de manera aleatoria
   - Esto permite validar la robustez del sistema sin depender de orden especifico

2. VALIDACIONES DINAMICAS
   - Los contadores se validan dinamicamente
   - Se capturan valores reales de la interfaz

3. MANEJO DE ERRORES
   - El sistema espera a que elementos sean visibles
   - Valida mensajes de error especificos
   - Maneja timeout y reintentos

4. CALCULO DE TOTALES
   - Calcula subtotal automaticamente
   - Valida que impuestos se agreguen correctamente
   - Verifica que el total mostrado sea correcto

5. CAPTURA DE INFORMACION
   - Extrae nombres y precios de productos
   - Cuenta elementos dinamicamente
   - Lee valores de campos del DOM


================================================================================
REQUISITOS DEL SISTEMA
================================================================================

Software requerido:
- Node.js v16 o superior
- npm (gestor de paquetes)
- Navegador Chromium (descargado automaticamente)
- Sistema operativo: Windows, Mac o Linux

Especificaciones minimas:
- Memoria: 2GB RAM
- Almacenamiento: 500MB para dependencias y navegadores
- Conexion a internet para acceder a https://www.saucedemo.com


================================================================================
MANTENIMIENTO Y TROUBLESHOOTING
================================================================================

Problema: "Error: Missing step definition"
Solucion: Ejecute "npx bddgen" para regenerar los archivos de prueba

Problema: "Element not found" o "Timeout"
Solucion: Verifique que los selectores CSS sean correctos en los archivos Page

Problema: "Connection refused"
Solucion: Verifique que tenga acceso a internet para conectarse a saucedemo.com

Problema: Pruebas lentas
Solucion: Ejecute "npx playwright test --workers=1" para ajustar paralelismo

Limpiar archivos generados:
- Elimine carpeta ".features-gen" si existe
- Ejecute nuevamente "npx bddgen"


================================================================================
NOTAS IMPORTANTES
================================================================================

1. Las pruebas automatizadas corren en secuencia dentro de cada navegador
2. Se utiliza el navegador Chromium para todas las pruebas
3. Los reportes se generan en formato HTML en la carpeta "playwright-report"
4. Cada ejecucion crea archivos temporales en ".features-gen"
5. Las pruebas son independientes y pueden ejecutarse en cualquier orden
6. Se recomienda revisar el reporte HTML para analizar fallas


================================================================================
CONTACTO Y SOPORTE
================================================================================

Proyecto: NTTDATA Challenge
Version: 1.0.0
Descripcion: Pruebas automatizadas para plataforma SauceDemo
Tecnologia: Playwright + Cucumber/BDD

Para mas informacion sobre Playwright:
https://playwright.dev/

Para mas informacion sobre Cucumber:
https://cucumber.io/


================================================================================
FIN DEL DOCUMENTO
================================================================================
