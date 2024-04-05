const porta = 3003

const express = require('express')
const app = express()
const bancoDeDados = require('./bancoDeDados')
const bodyParser = require('body-parser')

// app.get('/produtos', (req, res, next) => {
//     console.log('Middleware 1...')
//     next()
// })

app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // Converte para JSON
})

// app.get('/', (req, res, next) => {
//     res.send("<h1>Você está na página padrão</h1>")
// })

// Transforma as requisições do body
app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true }))

// Método get para ver todos os produtos
app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos())
})

// Método get para ver um produto pelo id
app.get('/produtos/:id', (req, res) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

// Método post para adicionar um novo produto
app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// Método put para alterar um produto existente
app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto)
})

// Método delete para deletar um produto existente

app.delete('/produtos/:id', (req, res) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto)
})

// Inicia o servidor e chama um callback para avisar que abriu
app.listen(porta, () => {
    console.log(`Servidor executando na porta ${porta}`)
})