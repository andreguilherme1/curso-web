// 30) Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor.


let vetor = [1, 15, 3, 27, 2]

function verificar() {
    let menor = vetor[0]
    let maior = vetor[0]

    for (i = 0; i < vetor.length; i++) {
        if (vetor[i] > maior) {  
            maior = vetor[i]
        } else if (vetor[i] < menor) {
            menor = vetor[i]
        }
    }
    console.log(`O menor valor é: ${menor}, e o maior ${maior}`)
}

verificar()
