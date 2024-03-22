const moto = {
  freio: true,
};

moto.rodas = 4;

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

const frutas = ["Banana", "Pêra"];
console.log(Object.getPrototypeOf(""));
console.log(Array.prototype); // Mesma coisa que foi definido acima...

Object.getPrototypeOf(""); // String

const frutas1 = ["Banana", "Pêra"];
const frutas2 = ["Banana", "Pêra"];

console.log(Object.is(frutas1, frutas2)); // false

const carro = {
  marca: "Ford",
  ano: 2018,
};
Object.seal(carro);
//Object.freeze(carro);
carro.marca = "Fiat";
carro.cor  = "verde"
console.log(carro)
Object.preventExtensions(carro);

Object.isFrozen(carro); // true
Object.isSealed(carro); // true
Object.isExtensible(carro); // false
