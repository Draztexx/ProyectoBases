const { createAccessToken } = require('../libs/jwt');
const Usuario = require("../models/Usuario");
const bcrypt = require("bcrypt");

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
        const token= await createAccessToken({id:usuario.id});
        res.cookie('token',token)
        
        res.json(usuario);


    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error')
    }
}

exports.obtenerUsuario=async(req,res)=>{
    
        const {email,password}=req.body;
        console.log("Cuerpo de la solicitud:", req.body);
    try{
        const userFound=await Usuario.findOne({email});
        console.log(userFound);
        if(!userFound) return res.status(400).json({ error: "User not found" });

        const isMatch=await bcrypt.compare(password,userFound.passwordHash);
        if(!isMatch) return res.status(400).json({ error: "Incorrect password" });

        const token= await createAccessToken({id:userFound._id,tipo:userFound.tipo});
        res.cookie("token",token,{ 
            domain: 'localhost',
            path: '/',
            sameSite: 'None',
            //secure: true, 
            });
        
        res.json({
            nombre: userFound.nombre,
            email:userFound.email,
            direccion: userFound.direccion,
            tipo: userFound.tipo
        });
       

    }catch(error){
        console.log(error)
        res.status(500).json({ error: 'Hubo un error al procesar la solicitud' });
    }
}

exports.cerrar=async(req,res)=>{
    res.cookie('token',"",{
        expires:new Date(0)
    })
    return res.sendStatus(200)
}

