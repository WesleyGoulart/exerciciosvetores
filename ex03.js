// Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.

const array = []
const size = 20
let posicao = 0

for (let i = 0; i < size; i++) {
  array.push(i)
}

console.log(array)

for (let i = 0; i <= size; i++) {
    posicao = size - i
    array[posicao] = i
}

console.log(array)