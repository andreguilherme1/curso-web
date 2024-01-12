// 26) Fazer um programa para encontrar todos os pares entre 1 e 100.

function ex26() {
    let a = 0
    while (a < 100) {
        a++
        if (a % 2 == 0) {
            console.log(a)
        }
    }
}

ex26()