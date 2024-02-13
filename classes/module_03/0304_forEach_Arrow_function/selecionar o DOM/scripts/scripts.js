// Abaixo estamos convertendo um HTML colection em um array
//HTMLCollection
const titulos = document.getElementsByClassName("titulo");
console.log(titulos);
// Convertendo em um array
const meusTitulos = Array.from(titulos);
console.log(meusTitulos);
// Agora sim conseguimos fazer o uso do forEach
meusTitulos.forEach(function (item, index) {
  console.log(item, index);
});

// Abaixo a versão tradicional com a function
const minhasImagens = document.querySelectorAll("img");
minhasImagens.forEach(function (item, index, array) {
  console.log(item, index, array);
});

// Abaixo temos a versão com arrow functions
const minhasImagens1 = document.querySelectorAll("img");
minhasImagens1.forEach((item) => {
  console.log(item);
});

const imgs = document.querySelectorAll("img");

// parâmetro único não precisa de parênteses
imgs.forEach((item) => {
  console.log(item);
});

// multiplos parâmetros precisam de parênteses
imgs.forEach((item, index) => {
  console.log(item, index);
});

// sem parâmetro precisa dos parênteses, mesmo vazio
let i = 0;
imgs.forEach(() => {
  console.log(i++);
});
