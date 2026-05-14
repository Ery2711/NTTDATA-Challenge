// Generated from: tests\features\login.feature
import { test } from "playwright-bdd";

test.describe('Login de usuario en SauceDemo', () => {

  test('Inicio de sesion con unicas credenciales validas', { tag: ['@login_requerido'] }, async ({ Given, When, Then, And }) => { 
    await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
    await When('agrega usuario "standard_user"'); 
    await And('agrega password "secret_sauce"'); 
    await And('hace click al boton de Login'); 
    await Then('ingresa satisfactoriamente'); 
  });

  test.describe('Inicio de sesion con multiples credenciales', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "problem_user"'); 
      await And('agrega password "secret_sauce"'); 
      await And('hace click al boton de Login'); 
      await Then('ingresa satisfactoriamente'); 
    });

    test('Example #2', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "error_user"'); 
      await And('agrega password "secret_sauce"'); 
      await And('hace click al boton de Login'); 
      await Then('ingresa satisfactoriamente'); 
    });

    test('Example #3', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "visual_user"'); 
      await And('agrega password "secret_sauce"'); 
      await And('hace click al boton de Login'); 
      await Then('ingresa satisfactoriamente'); 
    });

  });

  test('Inicio de sesion con credenciales bloqueadas', async ({ Given, When, Then, And }) => { 
    await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
    await When('agrega usuario "locked_out_user"'); 
    await And('agrega password "secret_sauce"'); 
    await And('hace click al boton de Login'); 
    await Then('mensaje de error es desplegado: "Epic sadface: Sorry, this user has been locked out."'); 
  });

  test.describe('Inicio de sesion con credenciales invalidas', () => {

    test('Example #1', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "standard_user"'); 
      await And('agrega password "abcde"'); 
      await And('hace click al boton de Login'); 
      await Then('mensaje de error es desplegado: "Epic sadface: Username and password do not match any user in this service"'); 
    });

    test('Example #2', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "abcde"'); 
      await And('agrega password "secret_sauce"'); 
      await And('hace click al boton de Login'); 
      await Then('mensaje de error es desplegado: "Epic sadface: Username and password do not match any user in this service"'); 
    });

    test('Example #3', async ({ Given, When, Then, And }) => { 
      await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
      await When('agrega usuario "abcde"'); 
      await And('agrega password "abcde"'); 
      await And('hace click al boton de Login'); 
      await Then('mensaje de error es desplegado: "Epic sadface: Username and password do not match any user in this service"'); 
    });

  });

  test('Inicio de sesion sin credenciales', async ({ Given, When, Then }) => { 
    await Given('usuario ingresa a la pagina "https://www.saucedemo.com"'); 
    await When('hace click al boton de Login'); 
    await Then('mensaje de error es desplegado: "Epic sadface: Username is required"'); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@login_requerido"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When agrega usuario \"standard_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then ingresa satisfactoriamente","stepMatchArguments":[]}]},
  {"pwTestLine":16,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When agrega usuario \"problem_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"problem_user\"","children":[{"start":16,"value":"problem_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":20,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then ingresa satisfactoriamente","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":26,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When agrega usuario \"error_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"error_user\"","children":[{"start":16,"value":"error_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":27,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":28,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then ingresa satisfactoriamente","stepMatchArguments":[]}]},
  {"pwTestLine":32,"pickleLine":21,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":34,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When agrega usuario \"visual_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"visual_user\"","children":[{"start":16,"value":"visual_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":35,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":36,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then ingresa satisfactoriamente","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":24,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":25,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":44,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When agrega usuario \"locked_out_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"locked_out_user\"","children":[{"start":16,"value":"locked_out_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":45,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":46,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":29,"keywordType":"Outcome","textWithKeyword":"Then mensaje de error es desplegado: \"Epic sadface: Sorry, this user has been locked out.\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: Sorry, this user has been locked out.\"","children":[{"start":33,"value":"Epic sadface: Sorry, this user has been locked out.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":52,"pickleLine":39,"tags":[],"steps":[{"pwStepLine":53,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When agrega usuario \"standard_user\"","stepMatchArguments":[{"group":{"start":15,"value":"\"standard_user\"","children":[{"start":16,"value":"standard_user","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":55,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And agrega password \"abcde\"","stepMatchArguments":[{"group":{"start":16,"value":"\"abcde\"","children":[{"start":17,"value":"abcde","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":56,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then mensaje de error es desplegado: \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":33,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":60,"pickleLine":40,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":62,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When agrega usuario \"abcde\"","stepMatchArguments":[{"group":{"start":15,"value":"\"abcde\"","children":[{"start":16,"value":"abcde","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":63,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And agrega password \"secret_sauce\"","stepMatchArguments":[{"group":{"start":16,"value":"\"secret_sauce\"","children":[{"start":17,"value":"secret_sauce","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":64,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then mensaje de error es desplegado: \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":33,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":68,"pickleLine":41,"tags":[],"steps":[{"pwStepLine":69,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":70,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When agrega usuario \"abcde\"","stepMatchArguments":[{"group":{"start":15,"value":"\"abcde\"","children":[{"start":16,"value":"abcde","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":71,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"And agrega password \"abcde\"","stepMatchArguments":[{"group":{"start":16,"value":"\"abcde\"","children":[{"start":17,"value":"abcde","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":72,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then mensaje de error es desplegado: \"Epic sadface: Username and password do not match any user in this service\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: Username and password do not match any user in this service\"","children":[{"start":33,"value":"Epic sadface: Username and password do not match any user in this service","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":78,"pickleLine":43,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given usuario ingresa a la pagina \"https://www.saucedemo.com\"","stepMatchArguments":[{"group":{"start":28,"value":"\"https://www.saucedemo.com\"","children":[{"start":29,"value":"https://www.saucedemo.com","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":80,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When hace click al boton de Login","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then mensaje de error es desplegado: \"Epic sadface: Username is required\"","stepMatchArguments":[{"group":{"start":32,"value":"\"Epic sadface: Username is required\"","children":[{"start":33,"value":"Epic sadface: Username is required","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end