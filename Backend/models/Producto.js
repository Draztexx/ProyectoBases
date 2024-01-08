const mongoose=require('mongoose');

const ProductoSchema=mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true
    },
    precio: {
        type: Number,
        required: true
    },
    tags: {
        type: Array,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    disponible: {
        type: Boolean,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now
    }

});

module.exports=mongoose.model('Producto',ProductoSchema);