const { findLongestWord } = require('./desafio2.js');

describe('Testes gerais da função findLongestWord', () => {
  const validString1 = "Hello world123 567";
  const validString2 = "Justa é a fintech que mais cresce no Brasil";
  const invalidString = " ";

  const validString1MockResult = "Hello";
  const validString2MockResult = "fintech";
  const invalidStringMockResult = null;

  it('Deve retornar a palavra mais longa caso a string seja válida', () => {
    const firstResult = findLongestWord(validString1);
    const secondResult = findLongestWord(validString2);

    expect(firstResult).toBe(validString1MockResult);
    expect(secondResult).toBe(validString2MockResult);
  });

  it('Deve retornar null caso a string seja invalida', () => {
    const result = findLongestWord(invalidString);

    expect(result).toBe(invalidStringMockResult);
  })
})