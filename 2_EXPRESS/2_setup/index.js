// importar express

// módulos interno, coremodels, módulos externos

// const para importar módulos

const express = require('express')

// rotas do express : endereço, url - definidas no express

const app = express()

// GET e POST : verbos http.
// link : requisição - chega no arquivo index.js
// pegar uma informação: GET
// enviar: POST

// rota, arrow function
app.get('/', (requisicao, resposta) => {
    resposta.send("Estou utilizando o Express.")
})