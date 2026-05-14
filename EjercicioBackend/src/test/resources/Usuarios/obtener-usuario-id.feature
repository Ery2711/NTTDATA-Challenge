Feature: Obtener lista de todos los usuarios

  Background:
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";
    * def infoUsuario = call read('crear-user.feature')
    * def infoUsuarioEliminado = call read('eliminar-user.feature')

  Scenario: Obtener usuario por id valido
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    When method get
    Then status 200
    And match response._id == infoUsuario.idUsuario

  Scenario: Validacion de ID no registrado
    Given url baseUrl
    And path "/usuarios/aaaaaaaaaaaaaaaa"
    When method get
    Then status 400
    And match response.message == "Usuário não encontrado"

  Scenario Outline: Validacion de longitud de ID
    Given url baseUrl
    And path "/usuarios/", <idUsuario>
    When method get
    Then status 400
    And match response.id == "id deve ter exatamente 16 caracteres alfanuméricos"
    Examples:
      | idUsuario         |
      | 123456789012345   |
      | 12345678901234567 |