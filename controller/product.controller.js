const Product = require("../model/product.model.js")

const getProducts = async (req,res)=>{
    try{
        const product = await Product.find({})
        res.status(200).json(product)
      }catch(e){
        res.status(500).json({message:e.message})
      }

}
const getProduct = async (req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findById(id)
        res.status(200).send(product)
      }
      catch (e) {
        res.status(500).json({ message: "internal server problem" })
      }
    
}

const postProducts =async (req,res)=>{
    try {

        const product = await Product.create(req.body)
        res.status(201).json(product)
    
    
      } catch (error) {
        console.log(error)
        res.status(500).json({ message: "internal server problem" })
      }
}

const putProduct = async (req,res)=>{
    try {
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id, req.body)
        if (!product) {
          return res.status(404)
        }
        const productUpdate = await Product.findById(id)
    
        res.status(200).send(productUpdate)
    
      } catch (e) {
        res.status(500).json({ message: "internal server problem" })
      }
}
const deleteProducts = async (req,res)=>{
    try {

        const product = await Product.deleteOne(req.body)
        res.send(product)
      }
      catch (e) {
        console.log(e)
        res.status(500).json({ message: "internal server problem" })
      }
}

module.exports = { 
    getProducts ,
    getProduct,
    postProducts,//Or createProduct
    putProduct,//Or updateProduct
    deleteProducts
}