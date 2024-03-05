function areaQuadrado() {
  console.log("Função Ativa");
}
areaQuadrado();

function calculeQuadrado(lado) {
  return lado * lado;
}
console.log(calculeQuadrado(10));

function pi() {
  return 3.14;
}

var total = 5 * pi();
console.log(total);

function imc(peso, altura) {
  var imc = peso / (altura * altura); // ** expoente
  return imc;
}

console.log(imc(80, 1.8)); // 80 e 1.80 são os argumentos
console.log(imc(60, 1.7)); // 60 e 1.70 são os argumentos

function corFavorita(cor) {
  if (cor === "Azul") {
    return "Voce gosta do ceu";
  } else if (cor === "Verde") {
    return "Você gosta de Mato";
  } else {
    return "Você não gosta de nada";
  }
}
console.log(corFavorita("Verde"));

addEventListener("click", function () {
  console.log("Clicou");
});

function mostraConsole() {
  console.log("Oi");
}

addEventListener("click", mostraConsole);
