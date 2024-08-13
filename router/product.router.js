
const express = require('express')
const Router = express.Router()
const {getProducts,getProduct,postProducts,putProduct,deleteProducts} =require("../controller/product.controller")


Router.get("/",getProducts)
Router.get("/:id",getProduct)
Router.post("/",postProducts)
Router.put("/:id",putProduct)
Router.delete("/",deleteProducts)


module.exports = Router