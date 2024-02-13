// const Dom = {
//   // Abaixo estmos criando uma propriedade chamada de seletor e seu valor é r `li`
//   seletor: "li",
//   // Abaixo vamos ter um funçào (método) chamado de element para retornar o nosso seletor 'li'
//   element() {
//     return document.querySelector(this.seletor);
//   },
//   // Adicionado a classe ativar dentro do nosso `li`
//   ativar() {
//     const elementoSelecionado = this.element();
//     this.element().classList.add("ativar");
//   },
// };

function Dom(seletor) {
  this.element = function () {
    return document.querySelector(seletor);
  };
  this.ativar = function (classe) {
    this.element().classList.add(classe);
  };
}

const ativandoclasse = new Dom("li:last-child");
ativandoclasse.ativar("acticve");
