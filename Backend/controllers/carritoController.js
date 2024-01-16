const Carrito=require("../models/Carrito");

exports.crearCarrito=async(req,res)=>{
    try{
        let carrito;

        carrito=new Carrito(req.body);

        await carrito.save();
        res.send(carrito);


    }catch(error){
        console.log(error)
        res.status(500).send('Hubo un error');
    }
}
