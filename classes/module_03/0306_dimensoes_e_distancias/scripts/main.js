const listaAnimais = document.querySelector(".animals-list");
const height = listaAnimais.scrollHeight;
console.log(height);
// Acima estamos pegando a altura do elemento das imagens dos animais com seu scroll

const animaisTopo = listaAnimais.offsetTop;
console.log(animaisTopo);

const FinalAteoTopo = document.querySelector(".copy");
const finalTopo = FinalAteoTopo.offsetTop;
console.log(finalTopo);

const primeiroH2 = document.querySelector("h2");
console.log(primeiroH2.offsetLeft);

const rect = document.querySelector("h2");
console.log(rect.getBoundingClientRect());

console
  .log
  //window.innerWidth, // pega o valor da largura da tela
  //window.outerWidth, // pega o valor da largura da tela e também o valor console
  //window.innerHeight,//pega o valor da altura do elemento
  //window.outerHeight // pega o valor total da tela (pega a barra superior do navegador)
  // window.pageXOffset // distancia que já foi dada de scroll X horizontyal , Y vertical
  ();

if (window.innerWidth < 600) {
  console.log("a tela é menor");
} else {
  console.log("A tela é maior");
}

const small = window.matchMedia("(max-width: 600px)").matches;
if (small) {
  console.log("usuário mobile");
} else {
  console.log("usuário desktop");
}
