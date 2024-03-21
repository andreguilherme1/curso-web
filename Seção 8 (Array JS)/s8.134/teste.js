let array = []
let a = 0

while (a < 50) {
    a++
    array.push(a)
}

array.forEach(function(numero) {
    if (numero % 2 == 0) {
        console.log(numero)
    } 
})