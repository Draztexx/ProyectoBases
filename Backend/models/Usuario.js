const mongoose=require('mongoose');

const UsuarioSchema=mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    correo: {
        type: String,
        required:true
    },
    contrasena: {
        type: String,
        required: true,
    },
    tipo: {
        type: Boolean,
        default: false
    }

});

module.exports=mongoose.model('Usuario',UsuarioSchema);