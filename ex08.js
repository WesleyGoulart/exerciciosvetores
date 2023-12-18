// Leia um vetor de 40 posições e acumule os valores do primeiro elemento no segundo, deste no terceiro e assim por diante. Ao final, escreva o vetor obtido.

const array1 = []
const array2 = []
const size = 40

for (let i = 0; i < size; i++) {
  array1.push(i)
}

console.log(array1)

for (let i = 0; i < size; i++) {
    array2[i] = array1[i] + array1[i - 1]
}

array2[0] = 0
console.log(array2)