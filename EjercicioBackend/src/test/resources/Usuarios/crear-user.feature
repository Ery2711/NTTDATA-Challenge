Feature: Crear nuevo usuario
  Background: Configuracion inicial
    * karate.configure('ssl', true);
    * def baseUrl = "https://serverest.dev";
    * def requestUser = read('../Support/usuario-post.json');
    * def tempEmail = 'test_' + java.lang.System.currentTimeMillis() + '@example.com'

  Scenario Outline: Verificar validacion de duplicidad de usuario
    Given url baseUrl
    And path "/usuarios"
    And request requestUser
    When method post
    Then status 400
    And match response.message == "Este email já está sendo usado"
    Examples:
      | nombre    | email                 | password    | administrador   |
      | TestUser | username@domain.com | password123 | true            |

  Scenario Outline: Verificar creacion de nuevo usuario
    Given url baseUrl
    And path "/usuarios"
    And request requestUser
    * set requestUser.email = tempEmail
    When method post
    Then status 201
    And match response.message == "Cadastro realizado com sucesso"
    * def idUsuario = response._id
    Examples:
      | nombre      | password    | administrador   |
      | TestUser010116 | password123 | true            |

