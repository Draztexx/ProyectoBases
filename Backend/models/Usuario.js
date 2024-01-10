const mongoose=require('mongoose');

const UsuarioSchema=mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    apellidos:{
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required: true,
    },
    direccion:{
        type: String,
        required:true,
    },
    tipo: {
        type: Boolean,
        default: false
    }

});

module.exports=mongoose.model('Usuario',UsuarioSchema);