// Retorne o url da página atual utilizando o objeto window
const minhaURL = window.document.location.href;
console.log(minhaURL);
// Seleciona o primeiro elemento da página que
// possua a classe ativo
const elementoAtivo = document.querySelector(".ativo");
console.log(elementoAtivo); // estamos selecionado uma classe chamada ativo

// Retorne a linguagem do navegador

const linguagem = window.navigator.language;
console.log(linguagem);

// Retorne a largura da janela
let larguraJanela = window.innerWidth;
console.log(larguraJanela);
