// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade
// Crie um método no protótipo que retorne
// o nome completo da pessoa
function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

Pessoa.prototype.NomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};
const Emmanuel = new Pessoa("Emmanuel", "Oliveira", 45);

// Liste os métodos acessados por
// dados criados com NodeList,
// HTMLCollection, Document

Object.getOwnPropertyNames(NodeList.prototype);
Object.getOwnPropertyNames(HTMLAllCollection.prototype);
Object.getOwnPropertyNames(Document.prototype);

// Liste os construtores dos dados abaixo
const li = document.querySelector("li");

li; //HTMLLIElement
li.click; // Function
li.innerText; // String
li.value; // Number
li.hidden; // Boolena
li.offsetLeft; // Number
li.click(); // undefinded

// Qual o construtor do dado abaixo:
li.hidden.constructor.name;
// String
