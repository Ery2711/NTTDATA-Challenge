Feature: Eliminar usuario

  Background:
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";

  Scenario: Eliminar usuario existente
    Given url baseUrl
    And path "/usuarios/1"
    When method delete
    * print "Respuesta:", response
    * print "Status code:", responseStatus
    Then status 200
    * print "Usuario eliminado correctamente"

