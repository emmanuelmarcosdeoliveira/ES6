const carros = ['Ford', 'Fiat', 'VW', 'Honda'];

// O splice adiciona elementos dentro de um Array, 
// 1° parametro é em que local do índice ele ira adicionar os elementos  
// 2° parametro é a quntidade de itens que ila remover do array
//carros.splice(1, 0, 'Kia', 'Mustang'); // []
//console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

//---------------------------------------------------------------------------------

//console.log(carros); // ['Ford', 'Kia', 'Mustang', 'Ferrari', 'Honda']
// Abaixo estamos incluindo no array 0 o Ferrari e estmos removendo 4 itens do nosso array 
console.log(carros.splice(0, 4, 'Ferrari')); // ['Fiat', 'VW']
console.log(carros) // Ferrai

//------------------------------------------------------------------------------------
//console.log(['Item1', 'Item2', 'Item3', 'Item4', 'Item 5']).copyWithin(2, 0, 2);
// ['Item1', 'Item2', 'Item1', 'Item2']

//console.log(['Item1', 'Item2', 'Item3', 'Item4', 'item 5'].copyWithin(-1));
// ['Item1', 'Item2', 'Item3', 'Item1']


//---------------------------------------------------------------------------------
//['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']

// Aqui estamos substituindo so avalores por Banana a partir do índice 2
//['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
 //['Item1', 'Item2', 'Banana', 'Banana']
 
// Aqui estamos substituindo so avalores por Banana
// qaundo passamos paremtros temos 
//1° A partir de que índice ele ira começar a substituir 
// 2° Até onde ira fazer a usbstituiçào
console.log(['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 1, 3));
// ['Item1', 'Banana', 'Banana', 'Item4']


//----------------------------------------------------------------------------
//O método concat irá concatenar o que foi passado (juntar )
const transporte1 = ['Barco', 'Aviao'];
const transporte2 = ['Carro', 'Moto'];
const transportes = transporte1.concat(transporte2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];
console.log(transportes)
const maisTransportes = [].concat(transporte1, transporte2, 'Van');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Van'];
console.log(maisTransportes)

//--------------------------------------------------------------------------------

const linguagens = ['html', 'css', 'js', 'php', 'python', 'js'];
// Abaixo estamos verificando se existe  'css'  dentro do array ele retorna um boolean
linguagens.includes('css'); // true
// Abaixo estamos verificando se existe  'ruby' dentro do array ele retorna um boolean
linguagens.includes('ruby'); // false
// Abaix estamos verificando se existem python dentro do Array e em que valor do índice ele se encontra
linguagens.indexOf('python'); // 4
// Temos 2 strings js dentro desse array abaixo ele esta me retornado em que posição está o primeiro.
linguagens.indexOf('js'); // 2
//Temos 2 strings js dentro desse array abaixo ele esta me retornado em que posição está o ultimo.
linguagens.lastIndexOf('js'); // 5

//-------------------------------------------------------------------------------
const linguagens1 = ['html', 'css', 'js', 'php', 'python'];
linguagens1.join(); // 'html,css,js,php,python'
linguagens1.join(' '); // 'html css js php python'
linguagens1.join('-_-'); // 'html-_-css-_-js-_-php-_-python'

let htmlString = '<h2>Título Principal</h2>'
console.log(htmlString)
// Abaixo estamos removendo o item que esta dentro do parentêses ('h2')
htmlString = htmlString.split('h2');
console.log(htmlString)
// ['<', '>Título Principal</', '>']
// Abaixo estamos acrescentado o h1 
htmlString = htmlString.join('h1');
// <h1>Título Principal</h1>

//----------------------------------------------------------------------------
//retorna os itens da array começando pelo início e indo até o valor de final.
const minhasLinguagens = ['html', 'css', 'js', 'php', 'python'];
// aqui abaixo estamos  retornado o valor a partir do indice 3
console.log(minhasLinguagens.slice(3)); // ['php', 'python']
// Abaixo estmos retornado o que esta entre o índice 1 e o índdice 4
minhasLinguagens.slice(1, 4); // ['css', 'js', 'php']
// Agora estmos fazendo um clone do array e atribuindo o clone a uma nova variável
const cloneLinguagens = linguagens.slice();
//----------------------------------------------------------------------------------







//---------------------------------------------------------------------------------