// Leia um vetor de 40 posições e atribua valor 0 para todos os elementos que possuírem valores negativos.

const array = [-10, -9, 8, 7, -6, 5, -4, 3, -2, -1, 0]

for (let i = 0; i <= array.length; i++) {
    if (array[i] < 0) {
        array[i] = 0
    }
}

console.log(array)