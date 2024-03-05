// Mostre no console cada parágrado do site
const paragraphy = document.querySelectorAll("p");
paragraphy.forEach((item) => {
  console.log(item);
});
// Mostre o texto dos parágrafos no console
const myparagraphy = document.querySelectorAll("p");
myparagraphy.forEach((p) => {
  console.log(p.innerText);
});

// Como corrigir os erros abaixo:

const imgs = document.querySelectorAll("img");

imgs.forEach((item, index) => {
  console.log(item, index);
});

let i = 0;
imgs.forEach(() => {
  console.log(i++);
});

imgs.forEach(() => i++);
