const mongoose = require('mongoose')

const productschema = mongoose.Schema(
    {
        Name:{
            type:String,
            required:[true,"enter the name "]
        },

        quantity:{
            type:Number,
            required:true,
            default:0
        },
        price:{
            type:Number,
            require:true,
            default:0
        }
    

    },

    {
        Timestamp:true
    }
)
const Product = mongoose.model("products",productschema)
module.exports=Product