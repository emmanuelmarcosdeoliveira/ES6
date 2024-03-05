//const carros = ['Ford', 'Fiesta', 'Honda']
//carros.forEach((item, index, array)=> {
 // console.log(item, index, array)
  //array[item] = 'teste'
  //console.log(array)
//})

//--------------------------------------------------------------------
const li = document.querySelectorAll('li');
// aqui como só tem uma elemento que estamos manipulando conseguimos escrever a nossa arrow functiond desse jeito!
const retornoforEach = li.forEach( item => item.classList.add("active"))  
// Abaixo estamos escrevendo da forma mais tradicional

li.forEach(function(item) {
 item.classList.add('ativa');
});

//console.log(retornoforEach)
//---------------------------------------------------------------------

const carros = ['Ford', 'Fiat', 'Honda'];
// Abaixo estamos utilizando o map() [ppara fazer uma interação no item adicionando a palavra carro antes do valor do item
const novaArray = carros.map((item) => {
  return 'Carro ' + item;
});
//console.log(novaArray)

//---------------------------------------------------------------------
/*
const numeros  = [2, 4, 5, 6, 78 ]
// Abaixo estamos fazendo uma interaçao dcom map() onde pegamos o valor do item que é um número e estamos multiplicando por 2x
const numerosMultiplicadosPor2 = numeros.map(numeros =>  numeros * 2 )
//console.log(numerosMultiplicadosPor2)
*/
//---------------------------------------------------------------------
/*

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

const tempoAulas = aulas.map(aula => aula.min);
// [15, 10, 20, 25];

const puxarNomes = aula => aula.nome;
const nomesAulas = aulas.map(puxarNomes);
// ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']
console.log(nomesAulas)
*/

//---------------------------------------------------------------------

const aulas = [10, 25, 30];
const total1 = aulas.reduce((acumulador, atual) => {
  return acumulador + atual;
});
total1; // 65
//console.log(total1)
const total2 = aulas.reduce((acc, cur) => acc + cur, 100);
total2; // 165

//---------------------------------------------------------------------
const numeros = [10, 25, 60, 5, 35, 10];

const maiorValor = numeros.reduce((anterior, atual) => {
  return anterior < atual ? atual : anterior;
});

maiorValor; // 60

