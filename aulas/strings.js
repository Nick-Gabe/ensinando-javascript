const nome = "Lucas"
const frase = "Bom Dia Meu Nome É Carlos"
const idade = 30

console.log(nome, idade)
console.log(nome + " tem " + idade + " anos")

console.log(`${nome} tem ${idade} anos`)
console.log(`O nome da pessoa existe? ${!!nome}`)

console.log(nome.endsWith('s'))
console.log(nome.includes('cas'))
console.log(nome.includes('z'))

if (frase.includes("Bom dia")) {
  console.log("Deu bom dia")
}

console.log(frase.replace('o', '_'))
console.log(frase.replaceAll('me', '__'))

console.log(frase.substring(8, 18))
console.log(frase.toLowerCase())
console.log(frase.toUpperCase())

console.log(frase[0], frase[1])