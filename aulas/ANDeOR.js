const pessoa = {
  nacionalidade: "br",
  sexo: 'm'
}

if (pessoa.sexo === 'm' && pessoa.nacionalidade === 'br') {
  console.log("Contratar")
} else {
  console.log("Não contratar")
}

// const a = 2
// ("2" == 2) // true
// ("2" === 2) // false

if (pessoa.sexo === 'f' || pessoa.nacionalidade === 'br') {
  console.log("Pode contratar")
} else {
  console.log("Não pode contratar")
}

if (pessoa.sexo === 'm' && pessoa.nacionalidade === 'br' || pessoa.sexo === 'f') {
  console.log('Pode contratar 2')
} else {
  console.log('Pode contratar 2')
}