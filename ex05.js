// Leia um vetor de 40 posições. Contar e escrever quantos valores pares ele possui.

const array = []
const size = 60
let pares = 0

for (let i = 0; i < size; i++) {
  array.push(i)
}

console.log(array)

for (let i = 0; i <= size; i++) {
    if (array[i] % 2 == 0) {
        pares = pares + 1
    }
}
console.log(pares)