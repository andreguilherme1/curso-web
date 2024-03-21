// 27) Construa uma função que receba como parâmetros as alturas e as taxas de crescimento anuais de duas crianças e calcule se existe uma criança menor, caso exista se a criança menor ultrapassará a maior e em quantos anos isso acontecerá. Utilize centímetros para as unidades de medida.

function calcularAltura(altura1, taxa1, altura2, taxa2) {
    let maior, menor, contagem = 0, taxaMaior, taxaMenor

    if (altura1 > altura2) {
        maior = altura1
        menor = altura2
        taxaMaior = taxa1
        taxaMenor = taxa2
    } else if (altura2 > altura1) {
        maior = altura2
        menor = altura1
        taxaMaior = taxa2
        taxaMenor = taxa1
    } else {
        console.log("As alturas são iguais")
        return
    }

    while (menor < maior) {
        menor += taxaMenor
        maior += taxaMaior
        contagem++
    }

        console.log(`A criança menor ultrapassará a maior em ${contagem} anos`)
}

calcularAltura(120, 5, 180,1)