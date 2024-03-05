//--------------------------------------------------------------
// Aqui estamos verificando se esse numero é inteiro
const ano = 2018;
const preco9 = new Number(99);
console.log(Number.isInteger(20))

//---------------------------------------------------------------
// Aqui vamos converteter uma string em u numero com valor decimal
console.log(parseFloat('99.50')); // Mesma função sem o Number
console.log(Number.parseFloat('99.50')); // 99.5
console.log(Number.parseFloat('100 Reais')); // 100
console.log(Number.parseFloat('R$ 100')); // NaN

//-----------------------------------------------------------------
// Aqui estamos convertendo uma string em um numero Inteiro
parseInt('99.50', 10); // 99
parseInt(5.43434355555, 10); // 5
console.log(Number.parseInt('100 Reais', 10)); // 100


//-----------------------------------------------------------------
// Aqui vamos arredondar um numero decimal para um numero inteiro
const preco = 2.99;
console.log(preco.toFixed()); // 3

const carro = 1000.455;
console.log(carro.toFixed(2)) // 1000.46

const preco2 = 1499.51;
console.log(preco2.toFixed()) // 1499

//-----------------------------------------------------------------
// Abaixo estamos convertendo o numero em uma string com o o `toString`
const preco4 = 2.99;
console.log(preco4.toString(10)); // '2.99'


//---------------------------------------------------------------------
// Essa propriedade transforma um valor em um tipo de moeda veja o exemplo abaixo.
const preco8 = 59.49;
console.log(preco8.toLocaleString('en-US', {style: 'currency', currency: 'USD'})); // $59.49
console.log(preco8.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})); // R$ 59,49


//-----------------------------------------------------------------------
//Objeto Math, ele é um objeto que possui propriedades e métodos

console.log(Math.PI) // 3.14159
Math.E // 2.718
Math.LN10 // 2.303
//abs() retorna o valor absoluto, ou seja, transforma negativo em positivo.
//ceil() arredonda para cima, retornando sempre uma integral 
// floor para baixo. 
//round() arredonda para o número integral mais próximo.

Math.abs(-5.5); // 5.5
Math.ceil(4.8334); // 5
Math.ceil(4.3); // 5
Math.floor(4.8334); // 4
Math.floor(4.3); // 4
Math.round(4.8334); // 5
Math.round(4.3); // 4

//----------------------------------------------------------------
// Abaixo estamos pegando o maior numero e o menor numero 

console.log(Math.max(5,3,10,42,2)); // 42
Math.min(5,3,10,42,2); // 2
// Abaixo estmos gerando um número alaeatório 
Math.random(); // 0.XXX
Math.floor(Math.random() * 100); // entre 0 e 100
Math.floor(Math.random() * 500);  // entre 0 e 500

// Número random entre 72 e 32
Math.floor(Math.random() * (72 - 32 + 1)) + 32; 
console.log(Math.floor(Math.random() * (40 - 20 + 1)) + 20);
