/*
DESAFIO 2 - Palavra mais longa
Escreva uma função, que receba uma String e retorne a palavra mais longa desta String.

Se houver duas ou mais palavras com o mesmo comprimento, retorne a primeira palavra mais longa da String.
Ignore as pontuações e a situação em que a String será vazia.
As palavras também podem conter números, mas somente as letras serão consideradas no tamanho da palavra.
Exemplos:

Entrada: "Hello world123 567"
Saída: Hello

Entrada: "Justa é a fintech que mais cresce no Brasil"
Saída: fintech

Entrada: "Justino é o mascote da Justa"
Saída: Justino
*/

/* SOLUÇÃO */

const findLongestWord = (string) => {

  // Antes é feita uma verificação. Caso a string seja vazia, a função retorna null
  if (string === " ") {
    return null
  }

  // Primeiro é feito um match na string com base no regex abaixo, que retorna apenas as palavras sem números
  // Em seguida o array criado pelo match é ordenado de forma decrescente de acordo com o tamanho das palavras
  // Isolamos então o primeiro elemento do array, a palavra mais longa
  const longestWord = string.match(/[a-zA-Z]+/g).sort((a, b) => b.length - a.length)[0];

  return longestWord;
}

module.exports = { findLongestWord }