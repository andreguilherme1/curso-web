// 17) Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
// Plano Aumento
// A 10%
// B 15%
// C 20%
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.

function calcularAumento(plano) {
    let salario = 1000
    let aumento

    if (plano == "A") {
        aumento = 0.1 * salario
    } else if (plano == "B") {
        aumento = 0.15 * salario
    } else if (plano == "C") {
        aumento = 0.2 * salario
    } else {
        console.log("Plano não encontrado")
    }

    switch (plano) {
        case "A":
        case "B":
        case "C":
            return salario + aumento
        default:
            return "Selecione um plano válido"
    }

}

console.log(calcularAumento("A"))
console.log(calcularAumento("B"))
console.log(calcularAumento("C"))
console.log(calcularAumento("D"))