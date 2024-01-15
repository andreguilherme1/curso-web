const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(pessoa)
console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017' // não funcionou porque foi definido a propriedade writable como false.
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (concatenar objetos)
const dest = {a: 1}
const o1 = {b: 2}
const o2 = {c: 3, a: 4} // transcreveu o primeiro 'a' por ter sido definido depois
const obj = Object.assign(dest, o1, o2)
console.log(obj)

// Object.freeze (não permite alterar o objeto)
Object.freeze(obj)
obj.c = 1234
console.log(obj)