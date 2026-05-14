// Generated from: tests\features\cart.feature
import { test } from "playwright-bdd";

test.describe('Validacion de compras', () => {

  test('Verificar productos elegidos en el carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se encuentra loggeado', null, { page }); 
    await And('agrego multiples productos', null, { page }); 
    await When('se hace click al carrito de compras', null, { page }); 
    await Then('el contador muestra la misma cantidad de la lista', null, { page }); 
  });

  test('Eliminar producto del carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se encuentra loggeado', null, { page }); 
    await And('agrego multiples productos', null, { page }); 
    await When('se hace click al carrito de compras', null, { page }); 
    await And('se verifica los productos seleccionados', null, { page }); 
    await And('se hace click en el boton Remove de un producto', null, { page }); 
    await Then('se actualiza lista del carrito', null, { page }); 
  });

  test.describe('Verificar campos requeridos de informacion de usuario', () => {

    test('Example #1', async ({ Given, When, Then, And, page }) => { 
      await Given('usuario se encuentra loggeado', null, { page }); 
      await And('agrego multiples productos', null, { page }); 
      await When('se hace click al carrito de compras', null, { page }); 
      await And('se verifica los productos seleccionados', null, { page }); 
      await And('se hace click en el boton \'Checkout\'', null, { page }); 
      await And('se agrega informacion incompleta: \'\', \'testOne\', \'07001\'', null, { page }); 
      await And('se hace click en el boton "Continue"', null, { page }); 
      await Then('formulario muestra error: \'Error: First Name is required\'', null, { page }); 
    });

    test('Example #2', async ({ Given, When, Then, And, page }) => { 
      await Given('usuario se encuentra loggeado', null, { page }); 
      await And('agrego multiples productos', null, { page }); 
      await When('se hace click al carrito de compras', null, { page }); 
      await And('se verifica los productos seleccionados', null, { page }); 
      await And('se hace click en el boton \'Checkout\'', null, { page }); 
      await And('se agrega informacion incompleta: \'testTwo\', \'\', \'07001\'', null, { page }); 
      await And('se hace click en el boton "Continue"', null, { page }); 
      await Then('formulario muestra error: \'Error: Last Name is required\'', null, { page }); 
    });

    test('Example #3', async ({ Given, When, Then, And, page }) => { 
      await Given('usuario se encuentra loggeado', null, { page }); 
      await And('agrego multiples productos', null, { page }); 
      await When('se hace click al carrito de compras', null, { page }); 
      await And('se verifica los productos seleccionados', null, { page }); 
      await And('se hace click en el boton \'Checkout\'', null, { page }); 
      await And('se agrega informacion incompleta: \'testThree\', \'testThree\', \'\'', null, { page }); 
      await And('se hace click en el boton "Continue"', null, { page }); 
      await Then('formulario muestra error: \'Error: Postal Code is required\'', null, { page }); 
    });

  });

  test('Checkout de productos', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se encuentra loggeado', null, { page }); 
    await And('agrego multiples productos', null, { page }); 
    await When('se hace click al carrito de compras', null, { page }); 
    await And('se verifica los productos seleccionados', null, { page }); 
    await And('se hace click en el boton \'Checkout\'', null, { page }); 
    await And('se completa informacion valida de usuario en formulario', null, { page }); 
    await And('se hace click en el boton \'Continue\'', null, { page }); 
    await And('se revisa el resumen de compra', null, { page }); 
    await And('se hace click en el boton \'Finish\'', null, { page }); 
    await Then('mensaje de exito es desplegado', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\cart.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":2,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":3,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":5,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":6,"keywordType":"Outcome","textWithKeyword":"Then el contador muestra la misma cantidad de la lista","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And se verifica los productos seleccionados","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And se hace click en el boton Remove de un producto","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":14,"keywordType":"Outcome","textWithKeyword":"Then se actualiza lista del carrito","stepMatchArguments":[]}]},
  {"pwTestLine":24,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And se verifica los productos seleccionados","stepMatchArguments":[]},{"pwStepLine":29,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Checkout'","stepMatchArguments":[{"group":{"start":26,"value":"'Checkout'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Checkout","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":30,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And se agrega informacion incompleta: '', 'testOne', '07001'","stepMatchArguments":[{"group":{"start":34,"value":"''","children":[{"children":[{"children":[]}]},{"start":35,"value":"","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":38,"value":"'testOne'","children":[{"children":[{"children":[]}]},{"start":39,"value":"testOne","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"'07001'","children":[{"children":[{"children":[]}]},{"start":50,"value":"07001","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":31,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And se hace click en el boton \"Continue\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Continue\"","children":[{"start":27,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":32,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then formulario muestra error: 'Error: First Name is required'","stepMatchArguments":[{"group":{"start":26,"value":"'Error: First Name is required'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Error: First Name is required","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":28,"tags":[],"steps":[{"pwStepLine":36,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And se verifica los productos seleccionados","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Checkout'","stepMatchArguments":[{"group":{"start":26,"value":"'Checkout'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Checkout","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":41,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And se agrega informacion incompleta: 'testTwo', '', '07001'","stepMatchArguments":[{"group":{"start":34,"value":"'testTwo'","children":[{"children":[{"children":[]}]},{"start":35,"value":"testTwo","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":45,"value":"''","children":[{"children":[{"children":[]}]},{"start":46,"value":"","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":49,"value":"'07001'","children":[{"children":[{"children":[]}]},{"start":50,"value":"07001","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":42,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And se hace click en el boton \"Continue\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Continue\"","children":[{"start":27,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":43,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then formulario muestra error: 'Error: Last Name is required'","stepMatchArguments":[{"group":{"start":26,"value":"'Error: Last Name is required'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Error: Last Name is required","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":46,"pickleLine":29,"tags":[],"steps":[{"pwStepLine":47,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":48,"gherkinStepLine":18,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":49,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"And se verifica los productos seleccionados","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Checkout'","stepMatchArguments":[{"group":{"start":26,"value":"'Checkout'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Checkout","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":52,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And se agrega informacion incompleta: 'testThree', 'testThree', ''","stepMatchArguments":[{"group":{"start":34,"value":"'testThree'","children":[{"children":[{"children":[]}]},{"start":35,"value":"testThree","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":47,"value":"'testThree'","children":[{"children":[{"children":[]}]},{"start":48,"value":"testThree","children":[{"children":[]}]}]},"parameterTypeName":"string"},{"group":{"start":60,"value":"''","children":[{"children":[{"children":[]}]},{"start":61,"value":"","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":53,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And se hace click en el boton \"Continue\"","stepMatchArguments":[{"group":{"start":26,"value":"\"Continue\"","children":[{"start":27,"value":"Continue","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":54,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then formulario muestra error: 'Error: Postal Code is required'","stepMatchArguments":[{"group":{"start":26,"value":"'Error: Postal Code is required'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Error: Postal Code is required","children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":59,"pickleLine":31,"tags":[],"steps":[{"pwStepLine":60,"gherkinStepLine":32,"keywordType":"Context","textWithKeyword":"Given usuario se encuentra loggeado","stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":33,"keywordType":"Context","textWithKeyword":"And agrego multiples productos","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When se hace click al carrito de compras","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"And se verifica los productos seleccionados","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Checkout'","stepMatchArguments":[{"group":{"start":26,"value":"'Checkout'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Checkout","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":65,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And se completa informacion valida de usuario en formulario","stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Continue'","stepMatchArguments":[{"group":{"start":26,"value":"'Continue'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Continue","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":67,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And se revisa el resumen de compra","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And se hace click en el boton 'Finish'","stepMatchArguments":[{"group":{"start":26,"value":"'Finish'","children":[{"children":[{"children":[]}]},{"start":27,"value":"Finish","children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":69,"gherkinStepLine":41,"keywordType":"Outcome","textWithKeyword":"Then mensaje de exito es desplegado","stepMatchArguments":[]}]},
]; // bdd-data-end