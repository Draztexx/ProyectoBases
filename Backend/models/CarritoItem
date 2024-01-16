const mongoose=require('mongoose');
const Producto=require('./Producto')

const CarritoItemSchema=mongoose.Schema({
    
    producto:{
        type: Object,
        required:true   
    },
    cantidad:{
        type:Number,
        required:true
    },
    precio:{
        type:Number,
        required: true
    }
})

module.exports=mongoose.model('CarritoItem',CarritoItemSchema);