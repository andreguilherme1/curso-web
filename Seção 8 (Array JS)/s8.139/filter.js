const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPadPro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plástico', preco: 18.99, fragil: false }
]

let filtrarPreco = produtos.filter(function(p) {
    return p.preco > 2500
})
console.log(filtrarPreco)

let filtrarNome = produtos.filter(function(p) {
    return p.nome === 'Notebook'
})
console.log(filtrarNome)

let filtrarFragil = produtos.filter(function(p) {
    return p.fragil === false
})
console.log(filtrarFragil)

let filtrarFragilCaro = produtos.filter(function(p) {
    return p.preco > 2000 && p.fragil === true
})
console.log(filtrarFragilCaro)