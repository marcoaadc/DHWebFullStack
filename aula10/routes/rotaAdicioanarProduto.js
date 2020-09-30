const express = require("express")
const produtoController = require("../controllers/produtoController")
const queryController = require("../controllers/queryController")
const routes = express.Router()

routes.get("/produto/adicionar/:nome/:preco/:quantidade/:codigo", produtoController.getProduto)

routes.get("/query/params/:nome",queryController.getQuery)

module.exports = routes;