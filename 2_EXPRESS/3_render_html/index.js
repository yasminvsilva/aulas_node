const express = require("express")
const path = require("path")

const app = express()

const caminhoBase = path.join(__dirname, 'templates')

// traça um caminho indo de index.js para templates.

app.get('/', (requesicao, resposta) => {
    resposta.sendFile(`${caminhoBase}/index.html`)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

// http://localhost:3000