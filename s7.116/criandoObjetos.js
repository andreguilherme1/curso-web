// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object me JS
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("caneta", 7.99, 0.15)
const p2 = new Produto("Notebook", 2999, 0.25)

console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario("João", 1000, 4)
const f2 = criarFuncionario("Maria", 1200, 5)

console.log(f1.getSalario(), f2.getSalario())

// Object.create
const filha = Object.create(null)
filha.nome = "Ana"
console.log(filha)

// Uma função famosa que retorna Objeto...

const fromJSON = JSON.parse('{"info": "Sou um arquivo em JSON"}')

console.log(fromJSON.info)