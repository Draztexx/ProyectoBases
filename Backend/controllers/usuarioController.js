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

exports.obtenerUsuario=async(req,res)=>{
    try{
        
        let usuario=await Usuario.find(req.params.email,req.params.password);
        if(!usuario){
            res.status(404).json({msg: "No existe el Usuario"});
        }else{
            res.json(usuario)
        }
    }catch(error){
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

