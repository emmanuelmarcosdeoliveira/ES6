const comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável;
const removendoPrimeiroItem  = comidas.shift()
console.log(removendoPrimeiroItem)
// Remova o último valor de comidas e coloque em uma variável
const removeComidas  = comidas.pop()
console.log(removeComidas)
// Adicione 'Arroz' ao final da array
comidas.push('Arroz')
console.log(comidas)
// Adicione 'Peixe' e 'Batata' ao início da array
comidas.unshift("peixe", "Batatas")
console.log(comidas)
//-------------------------------------------------------------------
const estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber', 'Julia'];
// Arrume os estudantes em ordem alfabética
estudantes.sort()
console.log(estudantes)
// Inverta a ordem dos estudantes
estudantes.reverse()
console.log(estudantes)
// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes("Joana"))
// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes("Juliana"))
let html = `<section>
              <div>Sobre</div>
              <div>Produtos</div>
              <div>Contato</div>
            </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html  = html.split('section').join('ul').split('div').join('li')
console.log(html)

const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const cloneCarros = carros.slice()
carros.pop()
console.log(carros)
console.log(cloneCarros)