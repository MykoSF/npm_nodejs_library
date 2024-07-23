const express = require('express')
const app = express()
const port = 3000 //ambiente variável

const path = require('path')
const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req,res) => {
    const id = req.params.id

    //leitura da tabela de usuários ou resgatando um usuário do banco de dados
    console.log(`Estamos procurando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req,res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, ( ) => {
    console.log(`App rodando na porta ${port}`)
})
