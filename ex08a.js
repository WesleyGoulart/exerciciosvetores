// Leia um vetor de ao contrário

const array = [0, 5, 9, -8, 4, 14, 89, -41, 98, 35, 85, 3]
let size = array.length - 1
let x = 0

for (i = 0; i < array.length / 2; i++) {
    x = array[i]
    array[i] = array[size]
    array[size] = x
    size = size - 1
    x = 0
}

console.log (array)