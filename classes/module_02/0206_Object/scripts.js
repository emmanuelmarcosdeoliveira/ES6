var pessoa = {
  nome: "Emmanuel",
  idade: 44,
  profissao: "Developer Full Stack Python",
  possuiFaculdade: "Sim",
};

console.log(pessoa.nome); // 'André'
console.log(pessoa.profissao); // true

var quadrado = {
  lados: 4,
  area: function (lado) {
    // Aqui podemos fazer de forma abreviada retirando a plavra function e os (:) pontos
    // area(lado)
    return lado * lado;
  },
  perimetro(lado) {
    console.log(this.lados);
    return lado * lado;
  },
  cinco() {
    return 5;
  },
};
console.log(quadrado.area(14));
console.log(quadrado.perimetro(5));
console.log(quadrado.cinco());

console.log(Math.PI); // Retornou o valor de PI
console.log(Math.random());
