const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // remove o último elemento do array
console.log (pilotos)

pilotos.push('Verstappen') // adiciona na ultima posição
console.log (pilotos)

pilotos.shift() // remove o primeiro elemento da lista
console.log (pilotos)

pilotos.unshift('Hamilton') // adiciona na primeira posição
console.log (pilotos)

// splice pode adicionar e remover

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log (pilotos)

// remover
pilotos.splice(1, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do índice 2 (tipo um recorte)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // coloca um limite até onde será recortado
console.log(algunsPilotos2)