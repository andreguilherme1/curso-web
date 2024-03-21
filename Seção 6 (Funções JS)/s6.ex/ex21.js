// 21) Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130

function planoSaude(idade) {
    let valorPadrao = 100
    if (idade < 0) {
        return "Idade inválida"
    } else if (idade <= 10 && idade >= 0) {
        return 80 + valorPadrao
    } else if (idade <= 30 && idade > 10) {
        return 50 + valorPadrao
    } else if (idade > 30 && idade <= 60) {
        return 95 + valorPadrao
    } else if (idade > 60) {
        return 130 + valorPadrao
    }
}

console.log(planoSaude(3))
console.log(planoSaude(15))
console.log(planoSaude(44))
console.log(planoSaude(70))
console.log(planoSaude(-3))