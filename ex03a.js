// Leia um vetor de 16 posições e troque os 8 primeiros valores pelos 8 últimos e vice-e-versa. Escreva ao final o vetor obtido.

const array = [0, 5, 9, 8, 4, 14, 89, 41, 98, 35, 85, 3]
const size = array.length
let posicao = size / 2
let x = 0

console.log(array)

for (let i = 0; i < size / 2; i++) {
    x = array[i]
    array[i] = array[posicao]
    array[posicao] = x
    x = 0
    posicao++
}

console.log(array)