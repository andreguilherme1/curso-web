// 08) Pedro joga N jogos de basquete por temporada. Para saber como está ele está progredindo, ele mantém registro de todos os as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2 pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior jogo. (Número do pior jogo)

function analisarPontuacoes(pontuacoes) {
    var pontuacoes = pontuacoes.split(" ").map(Number);
    var maximo = pontuacoes[0];
    var minimo = pontuacoes[0];
    var maximoQuebras = 0;
    var minimoJogo = 0;

    for (var i = 1; i < pontuacoes.length; i++) {
        if (pontuacoes[i] > maximo) {
            maximo = pontuacoes[i];
            maximoQuebras++;
        } else if (pontuacoes[i] < minimo) {
            minimo = pontuacoes[i];
            minimoJogo = i + 1;
        }
    }

    return [maximoQuebras, minimoJogo];
}

console.log(analisarPontuacoes("10 20 20 8 25 3 0 30 1"));
