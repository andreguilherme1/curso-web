const alunos = [
    { nome: 'João', nota: 7.9 },
    { nome: 'Maria', nota: 9.2 },
    { nome: 'Jorge', nota: 7.4}
]

// Imperativo
let total1 = 0
for (let a = 0; a < alunos.length; a++) {
    total1 += alunos[a].nota
}

console.log(total1 / alunos.length)

// Declarativo
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)

