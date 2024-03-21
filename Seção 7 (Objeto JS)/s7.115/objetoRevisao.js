const produto = new Object
produto.nome = "Cadeira"
produto["marca do produto"] = "Generica"
produto.preco = 220

delete produto.preco
console.log(produto)

const carro = {
    modelo: "a4",
    valor: 89000,
    proprietario: {
        nome: "André",
        idade: 20,
        endereco: {
            rua: 1,
            cidade: "Recife",
            estado: "Pernambuco"
        }
    },
    condutores: [{
        nome: "Junior",
        idade: 19
    }, {
        nome: "Ana",
        idade: 21
    }],

    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"] = "Av gigante"
console.log(carro)

delete carro.condutores
console.log(carro)