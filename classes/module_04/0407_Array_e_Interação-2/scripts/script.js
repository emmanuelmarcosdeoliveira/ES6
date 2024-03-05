// reduce() com Objetos

const aulas = [
  {
    nome: 'HTML 1',
    min: 15
  },
  {
    nome: 'HTML 2',
    min: 10
  },
  {
    nome: 'CSS 1',
    min: 20
  },
  {
    nome: 'JS 1',
    min: 25
  },
]

const listaAulas = aulas.reduce((acumulador, atual, index) => {
  acumulador[index] = atual.nome;
  return acumulador;
}, {})

//---------------------------------------------------------------------
const frutas = ['Banana', 'Pêra', 'Uva'];
// Abaixo estamos pegando aop nosso método some() para verificar se tem um determinado valor dentro do nosso array. Ele nos retorna um valor boolean 
const temUva = frutas.some((fruta) => {
  return fruta === 'Uva';
}); // true
console.log(temUva)

function maiorQue100(numero) {
  return numero > 100;
}
const numeros = [0, 43, 22, 88, 101, 2];
const temMaior = numeros.some(maiorQue100); // true

console.log(temMaior)


//---------------------------------------------------------------------
const frutas2 = ['Banana', 'Pêra', 'Uva', ''];
// Esse métdodo every() faz uma verificação em todas os valores procurando por um valor que seu singnificado seja "false" neste caso temos uma string vazia que o seu significado é "false" . Tendo um dos itens como o valor de "false"ele para a interação e retorna `false` 


// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas2.every((fruta) => {
  return fruta; // false
});

const numeros2 = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros2.every(x => x > 3); // true



//---------------------------------------------------------------------