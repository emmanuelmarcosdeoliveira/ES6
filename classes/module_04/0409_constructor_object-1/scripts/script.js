// --------------------------------------------------------------------
// Abaixo estamos criando um objeto Construtor de pessoa
const pessoa = new Object({
  nome: "Emmanuel",
  idade: 45,
  EstadoCivil: "Casado",
});
// Abaixo estamos acessado o objeto pessoa
console.log(pessoa);
// Abaixo estamos acessando o valor do atributo (nome)
console.log(pessoa.nome);
//---------------------------------------------------------------------
// Abaixo estamos construindo um objeto literal com métodos
const carro = {
  fabrica(valor) {
    this.marca = valor;
    return this;
  },
  modelo(valor) {
    this.modelo = valor;
    return this;
  },
  acelerar() {
    return this.marca + " 100k/m em 10s";
  },
  freio() {
    return this.modelo + " Freio ABS";
  },
};
// Aqui estamos usandoo metodo create() para criar um novo objeto atráves do objeto carro
const honda = Object.create(carro).fabrica("Honda");
honda.modelo("Civic");
const ferrari = Object.create(carro).fabrica("Ferrari");
ferrari.modelo("S24X");
//---------------------------------------------------------------------
const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  },
};

const moto = {
  capacete: true,
};

const carros = {
  portas: 4,
  portaMala: true,
};

Object.assign(moto, funcaoAutomovel);
Object.assign(carros, funcaoAutomovel);
console.log(carros);

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});

console.log(moto);
