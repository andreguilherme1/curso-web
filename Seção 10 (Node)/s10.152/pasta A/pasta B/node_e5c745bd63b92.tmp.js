const moduloA = require('../../../s9.150/moduloA')
console.log(moduloA.ola)

const saudacao = require ('saudacao')
console.log(saudacao.ola)

const http = require ('http')
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}). listen(8080)