// 23) Escreva um algoritmo que leia o código de um aluno e suas três notas. Calcule a média ponderada do aluno, considerando que o peso para a maior nota seja 4 e para as duas restantes, 3. Mostre o código do aluno, suas três notas, a média calculada e uma mensagem "APROVADO" se a média for maior ou igual a 5 e "REPROVADO" se a média for menor que 5. Repita a operação até que o código lido seja negativo.

function calcularNota(nota1, nota2, nota3) {
    let notaMaior, notaX, notaY, ponderada;
    if (nota1 > nota2 && nota1> nota3) {
        notaMaior = nota1
        notaX = nota2
        notaY = nota3
    } else if (nota2 > nota1 && nota2 > nota3) {
        notaMaior = nota2
        notaX = nota1
        notaY = nota3
    } else if (nota3 > nota1 && nota3 > nota2) {
        notaMaior = nota3
        notaX = nota1
        notaY = nota2
    }

    ponderada = ((notaMaior * 4) + (notaX * 3) + (notaY * 3)) / 10;

    console.log(ponderada)
}

calcularNota(7, 4, 3)