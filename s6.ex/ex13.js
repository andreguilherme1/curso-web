// 13) Crie um programa que exibe se um dia é dia útil, fim de semana ou dia inválido dado o número referente ao dia. Considere que domingo é o dia 1 e sábado é o dia 7. Utilize a estrutura Switch.

function diaSemana(dia) {
    switch (dia) {
        case 1:
            return "Fim de semana"
        case 7:
            return "Fim de semana"
        case 2:
            return "Dia útil"
        case 3:
            return "Dia útil"
        case 4:
            return "Dia útil"
        case 5:
            return "Dia útil"
        case 6:
            return "Dia útil"
        default:
            return "Dia inválido"
    }
}

console.log(diaSemana(1))
console.log(diaSemana(2))
console.log(diaSemana(3))
console.log(diaSemana(4))
console.log(diaSemana(5))
console.log(diaSemana(6))
console.log(diaSemana(7))
console.log(diaSemana(8))