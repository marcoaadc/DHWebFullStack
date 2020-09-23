// Servidor com http
//http.createServer((req, res) =>  {
//    res.writeHead(200,{"Content-Type" : "text/html"})
//    res.end("Servidor rodando");
    
//}).listen(3000, () => {
//    console.log("Esta rodando na porta 3000")
//})

const express = require("express");
const app = express()
const port = 3000
const rotaHome = require("./routes/rotaHome")
const rotaAdicioanarProduto = require("./routes/rotaAdicioanarProduto")

app.use("/", rotaHome )

app.use(rotaAdicioanarProduto)

app.get("/users", (req,res) =>{
    res.send("Olá você está na lista de usuários")
})
app.get("/home", (req,res) =>{
    res.send("Olá você está na rota home")
})
app.listen(port, ()=>{
    console.log("O servidor está rodando na porta 3000")
})