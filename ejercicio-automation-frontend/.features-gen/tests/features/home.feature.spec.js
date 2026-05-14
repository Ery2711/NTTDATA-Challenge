// Generated from: tests\features\home.feature
import { test } from "playwright-bdd";

test.describe('Adicion y extracción de productos en SauceDemo', () => {

  test('Agregar un producto al carrito', { tag: ['@Before(', '@login_requerido)'] }, async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se ha logueado correctamente', null, { page }); 
    await And('pagina Products es desplegada', null, { page }); 
    await When('se agrega un solo producto', null, { page }); 
    await Then('el contador de items del carrito incrementa', null, { page }); 
  });

  test('Agregar mas de un producto al carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se ha logueado correctamente', null, { page }); 
    await And('pagina Products es desplegada', null, { page }); 
    await When('se agrega multiples productos', null, { page }); 
    await Then('el contador de items del carrito incrementa', null, { page }); 
  });

  test('Quitar productos del carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se ha logueado correctamente', null, { page }); 
    await And('pagina Products es desplegada', null, { page }); 
    await When('se agrega multiples productos', null, { page }); 
    await And('se retiran algunos productos del carrito', null, { page }); 
    await Then('el contador de items del carrito disminuye', null, { page }); 
  });

  test('Quitar todos los productos del carrito', async ({ Given, When, Then, And, page }) => { 
    await Given('usuario se ha logueado correctamente', null, { page }); 
    await And('pagina Products es desplegada', null, { page }); 
    await When('se agrega y retira misma cantidad de productos', null, { page }); 
    await Then('el contador de items del carrito desaparece', null, { page }); 
  });

});

// == technical section ==

test.beforeEach('BeforeEach Hooks', ({ $runScenarioHooks, page }) => $runScenarioHooks('before', { page }));

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('tests\\features\\home.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":3,"tags":["@Before(","@login_requerido)"],"steps":[{"pwStepLine":7,"gherkinStepLine":4,"keywordType":"Context","textWithKeyword":"Given usuario se ha logueado correctamente","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"And pagina Products es desplegada","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When se agrega un solo producto","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":7,"keywordType":"Outcome","textWithKeyword":"Then el contador de items del carrito incrementa","stepMatchArguments":[]}]},
  {"pwTestLine":13,"pickleLine":9,"tags":[],"steps":[{"pwStepLine":14,"gherkinStepLine":10,"keywordType":"Context","textWithKeyword":"Given usuario se ha logueado correctamente","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"And pagina Products es desplegada","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When se agrega multiples productos","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then el contador de items del carrito incrementa","stepMatchArguments":[]}]},
  {"pwTestLine":20,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":21,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given usuario se ha logueado correctamente","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":17,"keywordType":"Context","textWithKeyword":"And pagina Products es desplegada","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When se agrega multiples productos","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"And se retiran algunos productos del carrito","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then el contador de items del carrito disminuye","stepMatchArguments":[]}]},
  {"pwTestLine":28,"pickleLine":22,"tags":[],"steps":[{"pwStepLine":29,"gherkinStepLine":23,"keywordType":"Context","textWithKeyword":"Given usuario se ha logueado correctamente","stepMatchArguments":[]},{"pwStepLine":30,"gherkinStepLine":24,"keywordType":"Context","textWithKeyword":"And pagina Products es desplegada","stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When se agrega y retira misma cantidad de productos","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then el contador de items del carrito desaparece","stepMatchArguments":[]}]},
]; // bdd-data-end