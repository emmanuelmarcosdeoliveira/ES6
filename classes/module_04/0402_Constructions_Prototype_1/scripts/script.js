function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

Pessoa.prototype.andar = function () {
  return "Pessoa Andou";
};
Pessoa.prototype.nadar = function () {
  return "Pessoa nadou";
};
const Andre = new Pessoa("Andre", 28);

const pais = "Brasil";
const cidade = new String("Rio");

console.log(pais.charAt(0));
console.log(cidade.charAt(0));

const lista = document.querySelectorAll("li");
//console.log(lista);
// Abaixo estamos pegando a constante lista e estamos transformando em array
const listaArray = Array.from(lista);
console.log(listaArray);

const Carro = {
  marca: "Ford",
  preco: 2000,
  andar() {
    return true;
  },
};
