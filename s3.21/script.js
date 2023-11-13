// Desafio escrever os números impares e os números pares em blocos

let p = 0
let i = 0

console.log("Números Pares")
while (p < 11) {
    let ver = p
    let resto = ver % 2
    if (resto !== 1) {
        console.log(p)
    }
    p++
}

console.log("Números Impares")
while (i < 11) {
    let vrf = i
    let rest = vrf % 2
    if (rest !== 0) {
        console.log(i)
    }
    i++
}


