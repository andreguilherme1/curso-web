// 29) Utilizando a estrutura de repetição for, faça uma função que percorra um vetor e conte quantos números deste vetor estão no intervalo [10,20] (repare que o intervalo é fechado, ou seja, inclui o 10 e o 20) e quantos deles estão fora do intervalo, escrevendo estas informações.

let a = 0, contagem = 0
let vetor = []

while (a < 50) {
    a++
    vetor.push(a)
}

for (i = 0; i < vetor.length; i++) {
    if (vetor[i] <= 20 && vetor[i] >= 10 ) {
        contagem++
    }
}

console.log(`"A quantidade de números entre 10 e 20 são: ${contagem}`)