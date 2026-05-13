Feature: Login de usuario en SauceDemo
    @login_requerido
    Scenario: Inicio de sesion con unicas credenciales validas
        Given usuario ingresa a la pagina "https://www.saucedemo.com"
        When agrega usuario "standard_user"
        And agrega password "secret_sauce"
        And hace click al boton de Login
        Then ingresa satisfactoriamente


    Scenario Outline: Inicio de sesion con multiples credenciales
        Given usuario ingresa a la pagina "https://www.saucedemo.com"
        When agrega usuario "<usuario>"
        And agrega password "<password>"
        And hace click al boton de Login
        Then ingresa satisfactoriamente
        Examples:
            |usuario|password|
            |problem_user|secret_sauce|
            |error_user|secret_sauce|
            |visual_user|secret_sauce|


    Scenario: Inicio de sesion con credenciales bloqueadas
        Given usuario ingresa a la pagina "https://www.saucedemo.com"
        When agrega usuario "locked_out_user"
        And agrega password "secret_sauce"
        And hace click al boton de Login
        Then mensaje de error es desplegado: "Epic sadface: Sorry, this user has been locked out."
    
    Scenario Outline: Inicio de sesion con credenciales invalidas
        Given usuario ingresa a la pagina "https://www.saucedemo.com"
        When agrega usuario "<usuario>"
        And agrega password "<password>"
        And hace click al boton de Login
        Then mensaje de error es desplegado: "Epic sadface: Username and password do not match any user in this service"
        Examples:
            |usuario|password|
            |standard_user|abcde|
            |abcde|secret_sauce|
            |abcde|abcde|

    Scenario: Inicio de sesion sin credenciales
        Given usuario ingresa a la pagina "https://www.saucedemo.com"
        When hace click al boton de Login
        Then mensaje de error es desplegado: "Epic sadface: Username is required"