const comida = "Pizza";
console.log(comida);
const agua = new String("Agua");

console.log(comida.length);
// Se na String estiver espaços eles também serão condtados
console.log(agua.length);

const frase = "A melhor comida";
// Abaixo estamos selecionado a primeira letra da variável frase
console.log(frase[0]);
// Abaixo estamos selecionando a ultima letra da frase
console.log(frase[frase.length - 1]);
// Abaixo vamos utiliar o métodos chartArt que nos retorna o caractarter de acordo com o índice
console.log(frase.charAt([2]));

const minhaFrase = "A melhor linguagem é ";
const linguagem = "JavaScript";
//Abaixo estamos usando o  método cocnat() ele serve para fazer a junção de strings (concatenação) podemos passar mais parametros para juntar apoós a virgula
const fraseFinal = minhaFrase.concat(linguagem, "!!");
console.log(fraseFinal);

const fruta = "Banana";
const listaFrutas = "Melancia, Banana, Laranja";
// Abaixo estamos vendo se a string "Banana" contém dentro da string lista de frutas. Pondendo solicitar o começo da pesauisa indicando um valor de índidce. Retorna um valor bollean

listaFrutas.includes(fruta); // true
fruta.includes(listaFrutas); // false
console.log(listaFrutas.includes(fruta));
// Abaixo estamos vendo se na string fruta e;e começa com o valor de "Ba". a pesquisa é CanseSenstive Ele retorna um valor bollean
console.log(fruta.startsWith("Ba"));

const transacao1 = "Depósito de cliente";
const transacao2 = "Depósito de fornecedor";
const transacao3 = "Taxa de camisas";
// Esse método faz um corte na string de acordo com o índice de Start e o índidce de final
transacao1.slice(0, 3); // Dep
transacao2.slice(0, 3); // Dep
transacao3.slice(0, 3); // Tax

console.log(transacao1.slice(12)); // cliente
transacao1.slice(-4); // ente
transacao1.slice(3, 6); // ósi

// Esse métodos nós retorna em qual índice está aquele caracter específico.
const instrumento = "Guitarra";

instrumento.indexOf("r"); // 5
instrumento.lastIndexOf("r"); // 6
console.log(instrumento.indexOf("ta")); // 3

// Esse método incluir a quantidade de caracteres passado como parametros(caso não passe o segundo parametro ele incluir com caracteres vazio, caso passe o segundo parametro é ele que será preenchido)
const listaPrecos = ["R$ 99", "R$ 199", "R$ 12000"];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, "."));
});

listaPrecos[0].padStart(10, "."); // .....R$ 99
console.log(listaPrecos[0].padEnd(10, ".")); // R$ 99.....

const frase2 = "Ta";

console.log(frase2.repeat(5)); // TaTaTaTaTa

//Esse método Troca parte da string por outra. Podemos utilizar uma regular expression ou um valor direto. Se usarmos um valor direto ele irá trocar apenas o primeiro valor que encontrar.
let listaItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
console.log((listaItens = listaItens.replace(/[ ]+/g, ", ")));

let preco = "R$ 1200,43";
preco = preco.replace(",", "."); // 'R$ 1200.43'

//Divide a string de acordo com o padrão passado e retorna uma array.
const listaDeItens = "Camisas Bonés Calças Bermudas Vestidos Saias";
const arrayItens = listaDeItens.split(" ");
console.log(arrayItens)
const htmlText = "<div>O melhor item</div><div>A melhor lista</div>";
const htmlArray = htmlText.split("div");
const htmlNovo = htmlArray.join("section");

//Remove espaço em branco do início ou final de uma string.
const valor = '  R$ 23.00   ' 
valor.trim(); // 'R$ 23.00'
valor.trimStart(); // 'R$ 23.00   '
valor.trimEnd(); // '  R$ 23.00'

console.log(valor.trimStart())

