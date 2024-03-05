var numero = 20;
var item = 10;
numero += item;
console.log(numero);

// Vamos ver agora sobre as atribuiçòes de ternárrios

var idade = 20;
var naoPossuiDiabetes = false;
var podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode Beber" : "Nào pode Beber";
console.log(podeBeber);

// Abaixo uma forma de fazer o if quando temos apenas uma linha de código
var possuiFaculdade = false;
if (possuiFaculdade) console.log("Sim");
else console.log("não");
