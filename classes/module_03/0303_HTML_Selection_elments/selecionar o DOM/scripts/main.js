const animais = document.getElementById("animais");
console.log(animais.innerText);

const gridSection = document.getElementsByClassName("grid-section");
console.log(gridSection);

const primeiraLi = document.querySelector("li");
console.log(primeiraLi);

const primeiraUl = document.querySelector("ul");
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll(".animais img");
console.log(animaisImg[0]);

const gridSectionHTML = document.getElementsByClassName("grid-section");
const gridSectionNode = document.querySelectorAll(".grid-section");

primeiraUl.classList.add("grid-section");

console.log(gridSectionHTML);
console.log(gridSectionNode);

//gridSectionNode.forEach(function (item, index) {
// console.log(item);
//});

const arrayGrid = Array.from(gridSectionHTML);

arrayGrid.forEach(function (item) {
  console.log(item);
});
