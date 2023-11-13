// Outra forma de fazer utilizando laço for

let numeros = []

for (let a = 1; a <= 100; a++) {
    numeros.push(a)
}

console.log("Números pares")

for (let numero of numeros) {
    if (numero % 2 == 0) {
        console.log(numero)
    } 
}

console.log("Números ímpares")

for (let numero of numeros) {
    if (numero % 2 == 1) {
        console.log(numero)
    }
}