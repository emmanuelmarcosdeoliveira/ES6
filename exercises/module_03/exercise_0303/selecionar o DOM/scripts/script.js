// Retorne no console todas as imagens do site
const todasAsImagens = document.querySelectorAll("img");
console.log(todasAsImagens);

// Retorne no console apenas as imagens que começaram com a palavra imagem
const ImagemsApenas = document.querySelectorAll("img[src^='./img/imagem']");
console.log(ImagemsApenas);

// Selecione todos os links internos (onde o href começa com #)
const linkInternos = document.querySelectorAll("a[href^='#']");
console.log(linkInternos);
// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector(".description-animais h2");
console.log(primeiroH2.innerHTML);
// Selecione o último p do site

const ultimoP = document.querySelectorAll("p");
console.log(ultimoP[ultimoP.length - 1]);
