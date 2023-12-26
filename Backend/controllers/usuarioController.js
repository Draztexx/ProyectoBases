const Usuario = require("../models/Usuario");

exports.crearUsuario=async(req,res)=>{
    try{
        let usuario;

        usuario=new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

