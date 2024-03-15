const express = require("express")
const app = express()

app.get("/", function(req, res){
    res.send("Node JS")
})

app.get("/contato", function(req, res){
    res.send("Página de contato")
})

app.listen(8081, function(){
    console.log("Servidor rodando na porta 8081")
})