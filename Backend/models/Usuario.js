const mongoose=require('mongoose');

const UsuarioSchema=mongoose.Schema({
    nombre: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    passwordHash: {
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

})

UsuarioSchema.set('toObject',{
    transform:(document, returnedObject)=>{
    returnedObject.id=returnedObject._id
    delete returnedObject._id
    delete returnedObject.passwordHash
    delete returnedObject.__v
    }
})

module.exports=mongoose.model('Usuario',UsuarioSchema);