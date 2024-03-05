//---------------------------------------------------------------------
/*
const frutas = ['Banana', 'Pêra', 'Uva', 'Maçã'];
// Abaixo com o método findIndex() estamos verificando se dentro do array temos um valor === Maça e ele nos retorano o index dessa elementos que tem o valor ==== Maça que é o 

const buscaUva = frutas.findIndex((fruta) => {
  return fruta === 'Uva'; 
}); // 2

console.log(buscaUva)

*/
//---------------------------------------------------------------------
/*

const numeros = [6, 43, 22, 88, 101, 29];
// Com o método find() abaixo estmos buscando o primeiro elemento que seja maior ( > ) que 22 e o nosso primeiro valor que é maior é 88
//const buscaMaior45 = numeros.find(x => x > 22); // 88

console.log(buscaMaior45)


*/
//---------------------------------------------------------------------



const frutas = ['Banana', undefined, null, '', 'Uva', 0, 'Maçã'];
// No nosso método filter() estamos fazendo um loop procurando os valores que sejam truthy e ele esta retornado o nosso array com os valores que são `true`
const arrayLimpa = frutas.filter((item) => {
  return item; 
}); // ['Banana', 'Uva', 'Maçã']

console.log(arrayLimpa)

const numeros = [6, 43, 22, 88, 101, 29];
// Nesse exemplo abaixo o filter() está pegando os valores que são maiores que 45 e retornando na nova variável
const buscaMaior45 = numeros.filter(x => x > 45); // [88, 101]

console.log(buscaMaior45)


//---------------------------------------------------------------------

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
// Aqui estamos fazendo um loop para pegar os itens dentro do objeto aulas, dentro dele estamos verificando dentro da propriedade min, qual delas tem o tempo maior que 15 e retornando os itens que tem os valores de tempo maior que 15
const aulasMaiores = aulas.filter((aula) => { 
 return aula.min > 15;
});
console.log(aulasMaiores)
// [{nome: 'CSS 1', min: 20}, {nome: 'JS 1', min: 25}]
