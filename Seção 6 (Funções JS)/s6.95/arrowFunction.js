let dobro = function(a) {
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // Return implícito

console.log(dobro(8))
console.log(dobro(Math.PI))

// Escrita padrão
let ola = function () {
    return 'Olá'
}

// Refatorando
ola = () => 'Olá'
ola = _ => 'Olá'
console.log(ola())