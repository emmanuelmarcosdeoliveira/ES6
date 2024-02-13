const menu = document.querySelector(".menu");
menu.classList.add("ativo");
// Acima estavmos vendo uma lista de classes
menu.classList.remove("azul");
// Acima estamos remvondo a classe azul que estava no html
menu.classList.toggle("azul");

// Acima como tinhamos removido o Azul agora o toggle está adicionando o azul
if (menu.classList.contains("azul")) {
  menu.classList.add("possui-azul");
} else {
  menu.classList.add("nao-possui-azul");
}

const animais = document.querySelector(".animais");
console.log(animais.attributes[1]);
//Ele é um atributo que nos mostra um array-like com os atributos do elmento selecionado: classes, id. 

const img = document.querySelector("img");
const srcImg = img.getAttribute("src");
console.log(srcImg);
img.setAttribute("alt", "Raposa na Floresta Magica");

const possuiAlt = img.hasAttribute("title");
console.log(possuiAlt);

img.removeAttribute("alt");

const carro = {
  portas: 4,
  andar: function (Km) {
    console.log(`Andou ${Km} Km/h`);
  },
};
carro.portas = 5
