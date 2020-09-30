const produtoController ={
getProduto: (req,res) => {
    let {nome, preco, quantidade, codigo} = req.params
    
    const produto = {
     nome,
     preco,
     quantidade,
     codigo
    }

    res.send(produto)
}
}



module.exports = produtoController
