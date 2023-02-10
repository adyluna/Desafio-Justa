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
  // Primeiro transformamos a string em um array de palavras separadas pelos espaços em branco
  const wordArray = string.split(' ');

  // Criamos uma variável para guardar o valor da maior palavra encontrada até o momento
  let longestWord = '';

  // Em seguida fazemos dois loops
  // O primeiro loop itera sobre os elementos do array, as palavras
  for (let i = 0; i < wordArray.length; i ++) {
    // Criamos uma variável para guardar o valor do comprimento da palavra
    let wordLength = 0;

    // O segundo loop itera sob os caracteres de cada palavra
    // Caso o caractere seja diferente de um número, é adicionado +1 à variavel criada acima, wordLength
    for (let j = 0; j < wordArray[i].length; j++) {
      if (!Number(wordArray[i][j])) {
        wordLength += 1
      }
    }

    // Então comparamos o valor da variável wordLength com o comprimento da atual maior palavra encontrada
    // Caso wordLength seja maior que a atual maior palavra, então o valor de longestWord é atualizado para wordLength
    if (wordLength > longestWord.length) {
      longestWord = wordArray[i]
    }
  }

  // Por fim retornamos a maior palavra encontrada ao final dos loops
  return longestWord;
}

module.exports = { findLongestWord }