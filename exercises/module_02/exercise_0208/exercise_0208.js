// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilGanhouCopa = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

// somente usando o loop for
for (var i = 0; i < brasilGanhouCopa.length; i++) {
  console.log("O Brasil ganhou a Copa de " + brasilGanhouCopa[i]);
}

// usando o loop forEach
brasilGanhouCopa.forEach(function (e) {
  console.log(`O Brasil ganhou a Copa de ${e}`);
});

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ["Banana", "Maçã", "Pera", "Uva", "Melância"];
for (i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
  if (frutas[i] === "Pera") {
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimafruta = frutas[frutas.length - 1];
console.log(ultimafruta);
