Feature: Actualizar usuario existente

  Background:
    * def infoUsuario = call read('crear-user.feature')
    * def updateUser = read('../Support/usuario-update.json');
    * def tempEmail = 'test_' + java.lang.System.currentTimeMillis() + '@example.com'


  Scenario: Actualizar usuario con ID valido
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    * set updateUser.valido.email = tempEmail
    And request updateUser.valido
    When method put
    Then status 200
    And match response.message == "Registro alterado com sucesso"
    And match response._id == '#notpresent'

  Scenario: Validar creacion de usuario con ID inexistente
    Given url baseUrl
    And path "/usuarios/aabbccddee112233"
    * set updateUser.inexistente.email = tempEmail
    And request updateUser.inexistente
    When method put
    Then status 201
    And match response.message == "Cadastro realizado com sucesso"
    And match response._id != "aabbccddee112233"

  Scenario: Validar que los campos son requeridos del request
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    * set updateUser.inexistente.email = tempEmail
    And request updateUser.vacio
    When method put
    Then status 400
    And match response.nome == "nome não pode ficar em branco"
    And match response.email == "email não pode ficar em branco"
    And match response.password == "password não pode ficar em branco"
    And match response.administrador == "administrador deve ser 'true' ou 'false'"

  Scenario: Validar status code 4xx para id no ingresado
    Given url baseUrl
    And path "/usuarios/"
    When method put
    Then status 411

  Scenario: Validar adicion de campos no permitidos en el request
    Given url baseUrl
    And path "/usuarios/aabbccddee112233"
    * set updateUser.valido.valorNuevo = "nuevoValor"
    And request updateUser.valido
    When method put
    Then status 400
    And match response.valorNuevo == "valorNuevo não é permitido"
