// Leia um vetor de 20 posições e em seguida um valor X qualquer. Seu programa devera fazer uma busca do valor de X no vetor lido e informar a posição em que foi encontrado ou se não foi encontrado.

const array = []
const size = 20

for (let i = 0; i < size; i++) {
  array.push(i)
}

console.log(array)

const x = 100

if (x <= size) {    
    for (let i = 0; i < size; i++) {
        if (array[i] == x) {
            console.log(`O valor procurado é ${x} e foi encontrado na posição ${i} do vetor.`)
        }
    } 
} else {
    console.log(`O valor procurado é ${x} e não foi encontrado no vetor.`)
    }