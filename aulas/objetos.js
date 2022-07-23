const pessoa2 = {
  nome: 'Lucas',
  idade: 30
}

const propriedadeQueQueroVer = 'idade'

console.log(pessoa2.idade)
console.log(pessoa2['idade'])
console.log(pessoa2[propriedadeQueQueroVer])

// console.log(pessoa2.profissao.nome)
console.log(pessoa2?.profissao?.nome)
console.log(pessoa2)