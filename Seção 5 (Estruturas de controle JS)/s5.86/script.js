const notas = [6.7, 7.4, 9.8, 8.1, 7.7]

for (let nota of notas) {
    console.log(`Nota = ${nota}`)
}

for (nota in notas) {
    console.log(`Nota = ${nota}`)
}

const pessoa = {
    nome: 'André',
    sobrenome: 'Guilherme',
    idade: '20',
    peso: '85'
}

for (let p in pessoa) {
    console.log(`${p} = ${pessoa[p]}`)
}