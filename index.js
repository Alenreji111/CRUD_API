//middleware
const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))




const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alenreji100:m3vaHgEjuUTQtNlc@cluster0.fzbhc.mongodb.net/API_CRUD?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => {
    console.log("connected!!")
    app.listen(3000, () => {

      console.log("app listen at port 3000 http://localhost:3000")
    })
  }).catch(() => {
    console.log("not connected!!")
  })

  //router
const productrouter = require("./router/product.router.js")
app.use("/api/products",productrouter)


app.get("/", (req, res) => {
  res.send("hello its node js")
  // console.log("working or not")
})


