const { verify } =require ("jsonwebtoken");
const Usuario=require("../models/Usuario");

exports.authRequired=async(req,res,next)=>{
    const {token}=req.cookies;
    if(!token){
        return res.status(401).json({message: "NO TOKEN AUTHORIZED"});
    }
    try {
        // Decodificar el token para obtener la información del usuario
        const decoded = verify(token, 'secret123');
        // Puedes almacenar la información del usuario en req.user para su posterior uso
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "TOKEN INVALIDO" });
    }
}

exports.tipoAdminRequired = (req, res, next) => {
    // Verificar si el usuario tiene el campo 'tipo' igual a true
    if (req.user && req.user.tipo === true) {
        next();
    } else {
        res.status(403).json({ error: 'Acceso prohibido para usuarios normales' });
    }
};

