function mostarCarro() {
  var carro = "Fusca";
  console.log(carro);
}

mostarCarro();
//console.log(carro); // Quando a variável é criada dentro da função ela não estara acessivel fora da função.

if (true) {
  let mes = "Dezembro";
  console.log(mes);
}
//console.log(mes);

{
  var carro2 = "Maclarem";
  //const ano = 2020;
}
console.log(carro2);
//console.log(ano);

// Esse Exemplo Abaixo é um caso que nào devemos usar o var para declarar Variáveis
for (let i = 0; i < 10; i++) {
  console.log(`Numero ${i}`);
}

const semana = "Sexta";

const data = {
  ano: 2018,
  mes: "Dezembro",
};
data.ano = 2019;
data.dias = 31;
