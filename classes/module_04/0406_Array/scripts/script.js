const instrumentos = ['Guitarra', 'Baixo', 'Violão'];
const precos = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome) { console.log(nome) }];

dados[2]('Ford');
dados[1][2].cor; // azul

const instrumentos1 = ['Guitarra', 'Baixo', 'Violão'];

const carros = new Array('Corola', 'Mustang', 'Honda');
carros[1] // Mustang
carros[2] = 'Ferrari';
console.log(carros)
carros[10] = 'Parati';
console.log(carros.length ); // 11

const li = document.querySelectorAll('li')
console.log(li)
const newArray = Array.from(li)
console.log(newArray[0])


const obj = {
  0: 'Emmanuel',
  1: 45,
  2: "Casado",
  length: 2
}

console.log(obj)


console.log(Array.of(10))
console.log(Array.of(1,2,3,4))

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
frutas.length; // 3

frutas[0].length; // 6
frutas[1].length; // 4
console.log(frutas[2].length); // 2


const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
// Aqui está alterando a ordem dos elementos (Não coloca em ordem alfabética)
instrumentos2.sort()
console.log(instrumentos2)

const idades = [32,21,33,43,1,12,8];
// Aqui está alterando a ordem dos elementos (Não coloca em ordem númerica)
idades.sort()
console.log(idades)


const carros1 = ['Ford', 'Fiat', 'VW'];
// Abaixo estamos adicionado elementos ao ínicio do Array
carros1.unshift('Honda', 'Kia'); //5
// Ao puxar carros no console veja que ele modificou o array carros
console.log(carros1); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW'];
// Abaixo ele esta acrescentado elementos ao Final do Array
carros1.push('Ferrari'); // 6
console.log(carros1); // ['Honda', 'Kia', 'Ford', 'Fiat', 'VW', 'Ferrari'];




// const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// const primeiroCarro = carros.shift(); // 'Ford'
// carros; // ['Fiat', 'VW', 'Honda'];

// const ultimoCarro = carros.pop(); // 'Honda'
// carros; // ['Fiat', 'VW'];




let marcas = ['Ford', 'Fiat', 'VW', 'Honda'];
console.log(marcas.reverse()); // ['Honda', 'VW', 'Fiat', 'Ford'];