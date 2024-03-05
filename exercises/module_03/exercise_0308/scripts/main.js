// Duplique o menu e adicione ele em copy
//  ----------------------------------------------------------------------------------
const menu = document.querySelector(".menu");
// Acima estou selecionado o menu
console.log(menu);
// Selecionando o menu
const copy = document.querySelector(".copy");
// estou selecionanado a classe copy
const cloneMenu = menu.cloneNode(true);
// Criando o clone do menu
copy.appendChild(cloneMenu);

// ---------------------------------------------------------------------------------

// Selecione o primeiro DT da dl de Faq

const faqs = document.querySelector(".faq");
// Acima estou selecionado a classe faq
const primeiroDT = faqs.querySelector("dt");
// Agora estou selecionadp de faq o primeiro dt
console.log(primeiroDT);

// -----------------------------------------------------------------------------------

// Selecione o DD referente ao primeiro DT

const primeiroDD = primeiroDT.nextElementSibling;
console.log(primeiroDD);

// -----------------------------------------------------------------------------------

// Substitua o conteúdo html de .faq pelo de .animais

const faq = document.querySelector(".faq");
// // Acima estou selecionado a classe faq
console.log(faq);

const animais = document.querySelector(".animais");
console.log(animais);
// // Acima estou selecionado a classe animais

// const body = document.querySelector("body");
// console.log(body);

// const cloneAnimais = animais.cloneNode(true);

// body.insertBefore(cloneAnimais, contato);
// faq.remove();

faq.innerHTML = animais.innerHTML;

// -----------------------------------------------------------------------------------
