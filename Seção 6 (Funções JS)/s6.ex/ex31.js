// 31) Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor e imprime a quantidade no console.

let vetor = [1, 3, 11, -5, 8, -11, 27, -4]
let contagem = 0

for (i = 0; vetor.length > i; i++) {
    if (vetor[i] < 0) {
        contagem++
    }
}

console.log(`A quantidade de números negativos nesse vetor é: ${contagem}`)