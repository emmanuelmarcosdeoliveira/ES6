// Adicione a classe ativo a todos os itens do menu
const menuAtivo = document.querySelectorAll(".menu a");
menuAtivo.forEach((item) => {
  item.classList.add("ativo");
});

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuAtivo.forEach((item) => {
  item.classList.remove("ativo");
});
menuAtivo[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt

const minhasImagens = document.querySelectorAll("img");
minhasImagens.forEach((item) => {
  const possuiAlt = item.hasAttribute("alt");
  console.log(item, possuiAlt);
});

// Modifique o href do link externo no menu
const ultimoLink = document.querySelector("a[href^='http']");
ultimoLink.setAttribute("href", "https://origamid.com");
console.log(ultimoLink);
