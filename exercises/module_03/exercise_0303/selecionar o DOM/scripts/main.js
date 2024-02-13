// Retorne no console todas as imagens do site
const todasImg = document.querySelectorAll("img");
console.log(todasImg);
// Retorne no console apenas as imagens que começaram com a palavra imagem

const imageimg = document.querySelectorAll('img[src^="./img/imagem"]');
console.log(imageimg);

// Selecione todos os links internos (onde o href começa com #)
const linksCSS = document.querySelectorAll('[href^="#"]');
console.log(linksCSS);

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".description-animais h2");
console.log(primeiroH2);

// Selecione o último p do site
const ultimoPargraf = document.querySelectorAll("p");
console.log(ultimoPargraf[ultimoPargraf.length - 1]); // uma forma de fazer
console.log(ultimoPargraf[--ultimoPargraf.length]); // outra forma de fazer
