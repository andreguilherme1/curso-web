// 28) Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

let vetor = []
let a = 0, par = 0, impar = 0

while (a < 50) {
    a++
    vetor.push(a)
}

for (let i = 0; i < vetor.length; i++) {
    if (vetor[i] % 2 == 0) {
        par++
    } else {
        impar++
    }
}

console.log(`A quantidade de números impares é: ${impar}, e a de números pares: ${par}`)