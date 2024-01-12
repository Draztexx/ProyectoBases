const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt")

exports.crearUsuario=async(req,res)=>{
    try{
        const {nombre,email,password,direccion,tipo}=req.body;

        const saltRounds=10;
        const passwordHash=await bcrypt.hash(password,saltRounds);

        let usuario=new Usuario({
            nombre,
            email,
            passwordHash,
            direccion,
            tipo
        });

        await usuario.save();
        usuario = usuario.toObject();
        //delete usuario.passwordHash;
        res.json(usuario);

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

