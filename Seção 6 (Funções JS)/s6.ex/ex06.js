// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.

function jurosSimples(capital, taxa, tempo) {
    let juros = taxa / 100
    let simples  = (capital * juros * tempo)
    let montante = (capital  + simples)
    console.log(`O resultado da aplicação em juros simpes é: ${montante}`)
}

function jurosCompostos(capital, taxa, tempo) {
    let juros = taxa / 100
    let compostos = (capital * (1 + juros) ** tempo)
    let aplicacao = (compostos - capital)
    let resultado = aplicacao + capital
    console.log(`O resultado da aplicação em juros compostos é: ${resultado}`)
}

jurosSimples(240, 0.2, 5)
jurosCompostos(435, 0.2, 5)