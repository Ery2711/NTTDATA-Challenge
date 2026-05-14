Feature: Obtener usuario por ID

  Background:
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";

  Scenario: Obtener usuario por ID
    Given url baseUrl
    And path "/usuarios/1"
    When method get
    * print "📥 Respuesta:", response
    * print "Status code:", responseStatus
    Then status 200
    And assert response.nome != null
    * print "✅ Usuario encontrado:", response

