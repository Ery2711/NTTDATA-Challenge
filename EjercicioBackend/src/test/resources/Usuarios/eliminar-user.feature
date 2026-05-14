Feature: Eliminar usuarios

  Background:
    * karate.configure('ssl', true);
    * karate.configure('retry', { count: 10, interval: 3000 });
    * def baseUrl = "https://serverest.dev";
    * def infoUsuario = call read('crear-user.feature')

  Scenario: Eliminacion de un usuario
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    When method delete
    Then status 200
    And match response.message == "Registro excluído com sucesso"


  Scenario: Eliminación y verificación de un usuario
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    When method delete
    Then status 200
    And match response.message == "Registro excluído com sucesso"
    # Se agrega otra estructura en el mismo escenario para confirmar el borrado con un get
    # debido a que por separado hay problemas de cache y el retry no funciona
    Given url baseUrl
    And path "/usuarios/", infoUsuario.idUsuario
    And header Cache-Control = 'no-cache'
    And retry until responseStatus == 400
    When method get
    Then status 400
    And match response.message == "Usuário não encontrado"


  Scenario: Validar que no se realiza eliminacion con ID inexistente
    Given url baseUrl
    And path "/usuarios/aabbccddee112233"
    When method delete
    Then status 200
    And match response.message == "Nenhum registro excluído"

  Scenario: Validar que no se realiza eliminacion sin ID
    Given url baseUrl
    And path "/usuarios/"
    When method delete
    Then status 405


