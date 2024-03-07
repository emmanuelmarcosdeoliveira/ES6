// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const paragrafos = document.querySelectorAll("p");
console.log(paragrafos);

const totalCaracteres = Array.prototype.reduce.call(
  paragrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);
console.log(totalCaracteres);

// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.

function criarElementos(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : null 
  conteudo ? elemento.innerHTML = conteudo : null;
  return elemento;
}

console.log(criarElementos("ul", 'teste', 'minha lista de elememntos'));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

//---------------------------------------------------------------------
const h1Titulo  = criarElementos.bind(null, 'h1', 'titulo')

const cursosJS  = console.log(h1Titulo('Curso de JS')) 
const cursosHTML  = console.log(h1Titulo('Curso de HTML')) 