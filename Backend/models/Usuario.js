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
        required: trusted,
    },
    tipo: {
        type: String,
        default: "user"
    }

});

modulr.exports=mongoose.model('Usuario',UsuarioSchema);