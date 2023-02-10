const { findIntersections } = require('./desafio1.js');

describe('Testes gerais da função findIntersections', () => {
  const validList = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
  const invalidList = ["1, 3, 9, 10, 17, 18", 13];

  const validListMockResult = "1,4,13";
  const invalidListMockResult = "Um ou mais elementos não são do tipo String";
  
  it('Deve retornar os pontos de interseção caso a lista seja válida', () => {
    const result = findIntersections(validList);

    expect(result).toBe(validListMockResult);
  })

  it('Deve retornar uma mensagem de erro caso a lista seja invalida', () => {
    const result = findIntersections(invalidList);

    expect(result).toBe(invalidListMockResult);
  })
})