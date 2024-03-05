const h1 = document.querySelector("h1");
//console.log(h1.innerHTML);

const animaisLista = document.querySelector(".animais-list");
//console.log(animaisLista.innerText);

const animaisDescricao = document.querySelector(".description-animais");
//console.log(animaisDescricao.innerText);

h1.outerHTML = "<h3> Novo Titulo </h3>";

const lista = document.querySelector(".animais-list");
console.log(lista.children[--lista.children.length]);
console.log(lista.querySelector("li:last-child"));
console.log(lista.childNodes);

const titulo = contato.querySelector(".titulo");
console.log(titulo);
