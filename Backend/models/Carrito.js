const mongoose=require('mongoose');
const CarritoItem = require('./CarritoItem');


const CarritoSchema=mongoose.Schema({
    items: {
        type:[Object],
        required:true
    },
    precioTotal: {
        type: Number,
        required:true
    },
    cantidadTotal: {
        type: Number,
        required:true
    },
    correo:{
        type: String,
        required:true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }
})

module.exports=mongoose.model('Carrito',CarritoSchema);