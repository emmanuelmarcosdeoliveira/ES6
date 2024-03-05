// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links

const linkInterno = document.querySelectorAll('a[href^="#"]');

function prevent(e) {
  e.preventDefault();
  linkInterno.forEach((link) => {
    link.classList.remove("ativo");
  });
  e.currentTarget.classList.add("ativo");
}

linkInterno.forEach((link) => {
  link.addEventListener("click", prevent);
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados

const todosElementos = document.querySelectorAll("body *");

function cliquei(e) {
  console.log(e.currentTarget);
  e.currentTarget.remove(); // Aqui estamos removendo os elementos
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener("click", cliquei);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.
function handleClickT(event) {
  if (event.key === "t") {
    document.documentElement.classList.toggle("textoMaior");
  }
}

window.addEventListener("keydown", handleClickT);
