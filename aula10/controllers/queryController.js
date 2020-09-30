const queryController = {
    getQueryParams : (req,res) => {
            let {nome} = req.params
            let {sobreNome} = req.query
            let frase = "oi " + nome + " " + sobreNome
            
            console.log(frase)
        }
    
}

module.exports = queryController