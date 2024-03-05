function imc2(peso, altura) {
  const imc  = peso / (altura *2);
  console.log(imc)
}

imc2(80, 1.8)

function terceiraIdade(idade) {
console.log(typeof idade)
if(typeof idade !== 'number') {
  return 'Por favor digite a sua idade'
}
 else  if (idade >= 60) {
  return true
}else  {
return false
}
}
console.log(terceiraIdade(64))

function faltaVisitar(paisesVisitados) {
  var TotalPaises = 193;
  return `Falta visitar ${TotalPaises - paisesVisitados} paises`
  }
console.log(faltaVisitar(20));



var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro
