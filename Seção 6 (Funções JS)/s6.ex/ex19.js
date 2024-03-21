// 19) O cardápio de uma lanchonete é o seguinte:
// Código Descrição do Produto Preço
// 100    Cachorro Quente      R$ 3,00
// 200    Hambúrguer Simples   R$ 4,00
// 300    Cheeseburguer        R$ 5,50
// 400    Bauru                R$ 7,50
// 500    Refrigerante         R$ 3,50
// 600    Suco                 R$ 2,80
// Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o comando switch. Crie um caso default para produto não existente.

function pedido(codigo, quantidade = 1) {
    let preço
    switch(codigo) {
        case 100:
            return preço = 3 * quantidade
        case 200:
            return preço = 4 * quantidade
        case 300:
            return preço = 5.5 * quantidade
        case 400:
            return preço = 7.5 * quantidade
        case 500:
            return preço = 3.5 * quantidade
        case 600:
            return preço = 2.8 * quantidade
        default:
            return "Código do pedido não encontrado"
    }
}

console.log(pedido(100, 3))
console.log(pedido(200, 4))
console.log(pedido(300, 5))
console.log(pedido(400, 6))
console.log(pedido(500, 7))
console.log(pedido(600, 8))
console.log(pedido(700, 9))