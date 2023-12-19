// Leia dois vetores de 20 posições e calcule um terceiro vetor contendo, nas posições pares os valores do primeiro e nas posições impares os valores do segundo.

const array1 = [0, 2, 4, 6, 8, 10]
const array2 = [1, 3, 5, 7, 9, 11]
const size = array1.length + array2.length
let array3 = []
let x = 0


for (let i = 0; i < size; i++) {
    array3[i] = array1[x]
    i++
    array3[i] = array2[x]
    x++
}

console.log(array3)
