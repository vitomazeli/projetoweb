const express = require("express")
const app = express()
const handlebars = require("express-handlebars").engine


app.engine("handlebars", handlebars({defaultLayout: "main"}))
app.set("view engine", "handlebars")

app.get("/", function(req,res){
    res.render("index.handlebars")
})

app.get("/consultar", function(req,res){
    res.render("consultar.handlebars")
})

app.get("/atualizar", function(req,res){
    res.render("atualizar.handlebars")
})

app.listen("8081", function(req,res){
    console.log("Rodando!")
})