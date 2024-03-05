const menu = document.querySelector(".menu");
console.log(menu);
console.log(menu.classList);

menu.classList.add("classeNova");
menu.classList.remove("classeNova");
console.log(menu.classList[0]);

// Estamos fazendo uma verificação se tem a classe 'azul' e se não tiver estamos acrescentando.
if (menu.classList.contains("azul")) {
  console.log("Já tem a classe 'menu'");
} else {
  menu.classList.add("azul");
}

console.log(menu.className);
menu.className = menu;
console.log(menu.innerText);

const meusatributos = document.querySelector(".animais");
console.log(meusatributos.attributes[1].value);

const img = document.querySelector("img");
const sourceImg = img.getAttribute("src");
console.log(sourceImg);

img.setAttribute("alt", "É uma raposa");
console.log(img);
