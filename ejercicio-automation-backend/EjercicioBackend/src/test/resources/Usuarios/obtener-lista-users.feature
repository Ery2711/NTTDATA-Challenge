Feature: Obtener lista de todos los usuarios

  Background:
    * def parameters = read('../Support/usuario-get-params.json');

  Scenario: Obtener usuarios sin parametros
    Given url baseUrl
    And path "/usuarios"
    When method get
    Then status 200

  Scenario: Obtener usuario con parametros
    Given url baseUrl
    And path "/usuarios"
    And params parameters.valido
    When method get
    Then status 200
    And match response.usuarios[0] == parameters.valido

  Scenario: Validar informacion con parametros inexistentes
    Given url baseUrl
    And path "/usuarios"
    And params parameters.inexistente
    When method get
    Then status 200
    And match response.quantidade == 0
    And match response.usuarios == []

  Scenario Outline: Validacion del campo email
    Given url baseUrl
    And path "/usuarios"
    And params { email: "<email>" }
    When method get
    Then status 400
    Examples:
    | email                |
    | usernameinexistentdomain.com |
    | usernameunexists@domaincom     |
    | usermaneunexistsdomaincom           |

  Scenario: Validacion del campo administrador
    Given url baseUrl
    And path "/usuarios"
    And params { administrador: "abcde" }
    When method get
    Then status 400
    And match response.administrador == "administrador deve ser 'true' ou 'false'"
