const lista = [
  'paulo',
  'césar',
  'leila'
]

console.log(lista[0])
console.log(lista.includes('text'))
console.log(lista.join('-'))

console.log(lista.find(function (elemento) {
  if (typeof (elemento) === 'string') return true
}))

const contratar = [
  {
    nome: 'joão'
  },
  {
    nome: 'césar'
  }
]

console.log(contratar.some(function (elemento) {
  if (elemento.nome === 'paulo') return true
}))

console.log(contratar.some(x => x.nome === 'paulo'))

const tickets = ['exemplo']
tickets.push('1. José')
tickets.push('2. Marcos', '3. Maria')
console.log(tickets)
// console.log(tickets.pop())
// console.log(tickets.shift())
console.log(tickets[0])
console.log(tickets.at(-1))

console.log(tickets.reverse())