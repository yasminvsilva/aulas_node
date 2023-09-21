const express = require("express")

const app = express()

app.get('/', (requesicao, resposta) => {
    resposta.send("Estou funcionando!")
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})

