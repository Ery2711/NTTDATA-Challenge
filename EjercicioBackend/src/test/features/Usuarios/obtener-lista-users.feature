Feature: Obtener lista de todos los usuarios

  Background:
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";

  Scenario: Obtener lista de usuarios
    Given url baseUrl
    And path "/usuarios"
    When method get
    * print "📥 Respuesta completa:", response
    * print "Status code:", responseStatus
    * print "Cantidad de usuarios:", response.data.length
    Then status 200
    And assert response.data != null && response.data.length > 0
    * print "✅ Primer usuario:", response.data[0]
