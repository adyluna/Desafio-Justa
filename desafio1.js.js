/*
DESAFIO 1 - Encontre as interseções

Escreva uma função, que receba um parâmetro de uma lista de String contendo dois elementos.
Cada elemento contém uma string com sequência de números ordenados de forma crescente.
E sua função deve retornar uma String contendo os números ordenados que aparecem nas duas listas.

Exemplos:

Entrada: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
Saída: 1,4,13

Entrada: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
Saída: 1,9,10
*/

/* SOLUÇÃO */

const findIntersections = (arr) => {

  // Identificando as strings
  const firstString = arr[0]
    .split(',') // Primeiro separamos os números a partir das vírgulas, transformando a string em um array
    .map(Number); // Depois é feito um map para converter os elementos do array para o tipo number
  
  const secondString = arr[1].split(',').map(Number);

  // Em seguida é feito um filter com um dos arrays, verificando quais elementos estão presentes em ambos
  // Caso o primeiro array seja maior que o segundo, usaremos ele como base de comparação no filter
  if (firstString.length > secondString.length) return firstString.filter((e) => secondString.includes(e)).toString();

  // Caso contrário, o segundo array é utilizado como base
  return secondString
    .filter((e) => firstString
      .includes(e))
      .toString(); //Por fim o resultado é transformado novamente em uma string e retornado
}

module.exports = { findIntersections }