const perimetro = new Function("lado", "return lado * 4");

function somar(n1, n2) {
  return n1 + n2 ;
}
// Abaixo estamos retornando o método de função `length` que nos retotna a quantidade de elememtos que tem essa função.
console.log(somar.length);
// Abaixo estamos retornando o nome da função.
console.log(somar.name)

// Agora vamos ver alguns métodos de funçào
function darOi(){
  console.log('Oi para você')
}
darOi.call()

const carros = ['Ford', 'Fiat', 'VW'];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(carros, (item) => {
  console.log(item);
}); // Log de cada Carro

const frutas = ['Banana', 'Pêra', 'Uva'];

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Fruta