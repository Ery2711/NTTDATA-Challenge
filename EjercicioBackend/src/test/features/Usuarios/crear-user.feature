Feature: Crear nuevo usuario
  Background: Configuracion inicial
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";

  Scenario Outline: Verificar creacion de nuevo usuario
    * def requestUser = read('classpath:/usuario-post.json')
    * print "📤 Solicitud enviada:", requestUser
    Given url baseUrl
    And path "/usuarios"
    And request requestUser
    When method post
    * print "📥 Respuesta:", response
    * print "Status code:", responseStatus
    Then status 200
    And match response.nome == "<nombre>"
    Examples:
      | nombre    | email                 | password    | administrador   |
      | TestUser1 | testuser1@example.com | password123 | true            |
      | TestUser2 | testuser2@example.com | password123 | false           |
