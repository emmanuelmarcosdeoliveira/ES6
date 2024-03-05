// 0204 Boolean e Condiciopnais parte 2
if (5 - 5 && 5 + 5) {
  console.log("verdadeiro");
} else {
  console.log("Falso");
}

var condicional = 5 - 10 && 5 + 5;
if (condicional) {
  console.log("verdadeiro", condicional);
} else {
  console.log("Falso");
}

var condicional2 = 5 - 5 || 5 + 5 || 10 - 2;
console.log(condicional2);

var corFavorita = "Verde";
switch (corFavorita) {
  case "Azul":
    console.log("Olhe para o céu!");
    break;
  case "Amarelo":
    console.log("Que amarelo lindo, olhe para o Sol");
    break;
  case "Verde":
    console.log("Olhe para a Floresta");
    break;
  default:
    console.log("Feche os Olhos");
}
