const fs = require('fs')  // fs = file system - cria pastas, arquivos

fs.readFile('frase.txt', 'utf8', (erro, dados) => {
    if(erro) {
        console.log(erro)
        return
    }

    console.log(dados)
})