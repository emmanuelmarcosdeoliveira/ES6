const imagens = document.querySelectorAll("img");
//imagens.forEach((i, index) => {
// console.log(i, index);
//});

//Abaixo um código escreito na forma normal
let i = 0;
imagens.forEach(function () {
  console.log(i++);
});

// Abaixo temos uma forma bem abreviada de escrevar a Arrow Function
imagens.forEach((item) => console.log(i++));
