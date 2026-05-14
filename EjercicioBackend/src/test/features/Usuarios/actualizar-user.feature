Feature: Actualizar usuario

  Background:
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";
    * def requestUser = read('classpath:/usuario-update.json');

  Scenario: Actualizar usuario existente
    * print "📤 Datos de actualización:", requestUser
    Given url baseUrl
    And path "/usuarios/1"
    And request requestUser
    When method put
    * print "📥 Respuesta:", response
    * print "Status code:", responseStatus
    Then status 200
    * print "✅ Usuario actualizado correctamente"

