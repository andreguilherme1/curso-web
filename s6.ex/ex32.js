// 32) Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.

let vetor = [1, 15, 3, 27, 2]
let valor = 0


for (i = 0; vetor.length > i; i++) {
    valor += vetor[i]
}

let media = valor / vetor.length

console.log(`A média aritimética do vetor é: ${media}`)