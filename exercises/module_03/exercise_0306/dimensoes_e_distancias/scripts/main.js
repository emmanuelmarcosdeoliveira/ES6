// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
const alturaPrimeiraImagem = primeiraImagem.offsetTop;
console.log(alturaPrimeiraImagem);

// Retorne a soma da largura de todas as imagens
const todasAsImagens = document.querySelectorAll("img");
function somarImagens() {
  let soma = 0;
  todasAsImagens.forEach((i) => {
    soma += i.offsetWidth;
  });
  console.log(soma);
}
window.onload = function () {
  somarImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const links = document.querySelectorAll(".menu a");
console.log(links);
links.forEach((i) => {
  const linkWidth = i.offsetWidth;
  const linkHeight = i.offsetHeight;
  if (linkWidth >= 48 && linkHeight >= 48) {
    console.log("sao maiores que 48px");
  } else {
    console.log("não são maiores");
  }
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const browserSmall = window.matchMedia("(max-width: 720px)").matches;

if (browserSmall) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
