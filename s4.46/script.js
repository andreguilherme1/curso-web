let numeros = []

for (let a = 1; a <= 10; a++) {
    numeros.push(a)
}

for (let numero of numeros) {
    if (numero % 2 === 0) {
        console.log(numero)
    }
}