// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector("img");
console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
const todasAsImagens = document.querySelectorAll("img");
let soma = 0;
todasAsImagens.forEach((img) => {
  const larguraDasImagens = img.offsetWidth;
  soma += img.offsetWidth;
});
console.log(soma);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

const meusLinks = document.querySelectorAll(".menu a");
meusLinks.forEach((e) => {
  console.log(e);
});

meusLinks.forEach((a) => {
  const larguradoLink = a.offsetWidth;
  const alturadoLink = a.offsetHeight;
  console.log(alturadoLink, larguradoLink);
  if (alturadoLink >= 48 && larguradoLink >= 48) {
    console.log(a, "Possui acessibilidade");
  }
});
// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const small = window.matchMedia("(max-width:720px)").matches;
console.log(small);
if (small) {
  const menu = document.querySelector(".menu");
  menu.classList.add("menu-mobile");
}
