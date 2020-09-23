const express = require("express")
const router = express.Router()

router.get("/produto/adicionar/:nome/:preco/:quantidade/:codigo",(req,res)=>{
    let {nome, preco, quantidade, codigo} = req.params
    
    const produto = {
     nome,
     preco,
     quantidade,
     codigo
    }

    res.send(produto)
})

module.exports = router;