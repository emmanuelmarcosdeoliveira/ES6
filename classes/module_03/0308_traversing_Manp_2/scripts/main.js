// const h1 = document.querySelector("h1");
// //console.log(h1.innerHTML);

// const animaisLista = document.querySelector(".animals-list");
// //console.log(animaisLista.innerText);

// const animaisDescricao = document.querySelector(".description-animais");
// //console.log(animaisDescricao.innerText);

// h1.outerHTML = "<h3> Novo Titulo </h3>";

// const lista = document.querySelector(".animals-list");
// console.log(lista.children[--lista.children.length]);
// console.log(lista.querySelector("li:last-child"));
// console.log(lista.childNodes);

// const titulo = contato.querySelector(".titulo");
// const animais = document.querySelector(".animais");
// console.log(animais);

// const mapa = document.querySelector(".mapa");

// //animais.appendChild(titulo);

// //contato.removeChild(titulo);

// contato.replaceChild(mapa, titulo);

// const novoH1 = document.createElement("h1");
// // Acima Criamo o novo elmento
// console.log(novoH1);
// novoH1.innerText = "Novo Titulo Criado";
// // Acima adicionamos um Texto a esse Elemento
// novoH1.classList.add("titulo");
// // Acima  adicionamos uma classe a esse elemento
// mapa.appendChild(novoH1);
// // Acima adicionamos o novoH1 como filho de contato após do mapa

const h1 = document.querySelector("h1");
console.log(h1);
// Vamos Fazer o clone desse h1 e colocar ele acima da FAQ
const faq = document.querySelector(".faq");
console.log(faq);
// Acima estamos selecionado a section Faq

const cloneH1 = h1.cloneNode(true);
// Acima criamos o clone do h1
faq.appendChild(cloneH1);
// Acima estamos incluindo ele como ultimo item da FAQ
