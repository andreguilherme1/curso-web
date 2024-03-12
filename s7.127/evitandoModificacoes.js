// Object.prevntExtensions
// Não deixa o objeto se extender, permitindo modificações, diferente do freeze

const produto = Object.preventExtensions({
    nome: 'Qualquer', 
    preco: '1.99', 
    tag: 'promoção'
})
console.log('Extensíevl:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// Não é mais possivl adicionar nem excluir novos atributos, mas é possivel modificar os valores dos objetos

const pessoa = {
    nome: 'Juliana',
    idade: 35
}

Object.seal(pessoa)
console.log('Selado', Object.isSealed(pessoa))
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze
// Não é mais possivel mexer no objeto


