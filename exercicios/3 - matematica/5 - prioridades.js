/* 
  Assim como na matemática normal, o JavaScript também segue uma lista
  de prioridades quando está lidando com operações matemáticas.

  Primeiro ele tenta executar os que estão entre parênteses.
  Em seguida as multiplicações, divisões e restos.
  E por fim, somas e subtrações.

  Tendo isso em mente, imagine que temos um número representando quantos
  segundos se passaram desde 1970 até 1 de janeiro deste ano, e quantos segundos
  se passaram de 1970 até este exato segundo atual. Crie um código que
  imprima quantos dias se passaram desde o início do ano até hoje, utilizando
  uma expressão matemática.

  (Recomendo pesquisar se precisar)
*/

// Código base para utilizar:
// (Não é necessário entendê-lo)
const atualmente = new Date()
const inicioAno = new Date(atualmente.getFullYear(), 0, 0, 0, 0, 0)

// Crie sua solução abaixo:
