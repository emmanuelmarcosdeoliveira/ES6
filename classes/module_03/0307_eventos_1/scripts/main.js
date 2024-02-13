const imagens = document.querySelector("img");

function clicou(event) {
  console.log(event);
}
imagens.addEventListener("click", clicou);

// acima estamos criando uma função que é clicar na imagem e estamos chamando essa funçào apos o callback

function callbackLista(event) {
  console.log(event.currentTarget);
  console.log(event.target);
  console.log(event.type);
}

const listaImagens = document.querySelector(".animais-list");
console.log(listaImagens);
listaImagens.addEventListener("click", callbackLista);

const LinksExterno = document.querySelector('a[href^="http"]');
console.log(LinksExterno);

function handleLinkExterno(event) {
  event.preventDefault();
  console.log(this.getAttribute("href"));
}

LinksExterno.addEventListener("click", handleLinkExterno);

const meuH1 = document.querySelector("h1");
console.log(meuH1);

function handleEvent(event) {
  console.log(event.type, event);
}

//meuH1.addEventListener("click", handleEvent);
//meuH1.addEventListener("mouseenter", handleEvent);
//meuH1.addEventListener("mousemove", handleEvent);

// function callbacks(event) {
//   console.log(event.type, event);
// }
//window.addEventListener("scroll", handleEvent);
//window.addEventListener("resize", handleEvent);

function HandelKeyborad(e) {
  if (e.key === "f") {
    document.body.classList.toggle("fullscreen");
  }
}

window.addEventListener("keydown", HandelKeyborad);
