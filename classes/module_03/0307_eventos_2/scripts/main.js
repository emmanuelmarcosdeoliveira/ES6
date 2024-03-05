const imagens = document.querySelectorAll("img");
console.log(imagens);

function handleImagens(e) {
  console.log(e.target.getAttribute("src"));
}

imagens.forEach((imagens) => {
  imagens.addEventListener("click", handleImagens);
});
