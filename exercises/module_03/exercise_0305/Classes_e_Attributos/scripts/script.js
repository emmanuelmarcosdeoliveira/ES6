// Adicione a classe ativo a todos os itens do menu
const itensMenu = document.querySelectorAll(".menu li");
console.log(itensMenu);
itensMenu.forEach((item) => {
  item.classList.add("ativo");
});
// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
itensMenu.forEach((item) => {
  item.classList.remove("ativo");
});
itensMenu[0].classList.add("ativo");

// Verifique se as imagens possuem o atributo alt
const todasImgs = document.querySelectorAll("img");
todasImgs.forEach((img) => {
  console.log(img.hasAttribute("alt"));
});

// Modifique o href do link externo no menu
const LinksExternos = document.querySelectorAll(".menu a[href^='http']");
console.log(LinksExternos);
LinksExternos.forEach((a) => {
  a.setAttribute("href", "https://oliveira-portifolio.vercel.app/");
});
