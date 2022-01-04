const util = require("../src/util");

test('Verifica se esta se apresentando corretamente', () => {
  expect(util.dizOla()).toBe("Olá, fullcycle!");
});

test('Testa soma', () => {
  expect(util.soma(2, 4)).toBe(7);
});

test('Testa subtracao', () => {
  expect(util.subtrai(9, 4)).toBe(5);
});

test('Testa divisao', () => {
  expect(util.divide(9, 3)).toBe(3);
});

test('Potencia', () => {
  expect(util.potencia(2, 3)).toBe(8);
});

test('Raiz', () => {
  expect(util.raiz(4)).toBe(2);
});


test('LeroLero', () => {
  expect(util.geraLinhasApenasParaComplementar()).toBe(40);
});