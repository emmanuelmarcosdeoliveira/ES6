// Crie um objeto com os seus dados pessoais
// Deve possui pelo menos duas propriedades nome e sobrenome
var manu = {
  nome: "Emmanuel",
  sobrenome: "Marcos de Oliveira",
  idade: 44,
  cidade: "São Paulo",
};
console.log(manu.nome);
console.log(manu.sobrenome);
// Crie um método no objeto anterior, que mostre o seu nome completo
manu.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
console.log(manu.nomeCompleto);
// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: "Audi",
};
carro.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
var cachorro = {
  raca: "labrador",
  cor: "preto",
  idade: 10,
  latir(pessoa) {
    if (pessoa === "homen") {
      return "Latir";
    } else {
      return "Nada";
    }
  },
};

// preto com 10 anos, que late ao ver um homem
