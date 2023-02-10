const { findIntersections } = require('./desafio1.js');
const { findLongestWord } = require('./desafio2.js');


const arrMock1 = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
const arrMock2 = ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"];

const phraseMock1 = "Hello world123 567";
const phraseMock2 = "Justa é a fintech que mais cresce no Brasil";
const phraseMock3 = "Justino é o mascote da Justa";

console.log('----------------------------------------------------------------');
console.log('Os pontos de interseção entre as strings fornecidas são: ' + findIntersections(arrMock1));
console.log('Os pontos de interseção entre as strings fornecidas são: ' + findIntersections(arrMock2));
console.log('----------------------------------------------------------------');
console.log('A palavra mais longa da frase fornecida é: ' + findLongestWord(phraseMock1));
console.log('A palavra mais longa da frase fornecida é: ' + findLongestWord(phraseMock2));
console.log('A palavra mais longa da frase fornecida é: ' + findLongestWord(phraseMock3));
console.log('----------------------------------------------------------------');