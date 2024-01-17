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
exports.obtenerComprasPorUsuario = async (req, res) => {
    try {
        let carritos = await Carrito.find({ correo: req.body.email });
        if (carritos.length === 0) {
            return res.status(404).json({ msg: "No hay compras para este usuario" });
        } else {
            res.json(carritos);
        }
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al obtener las compras del usuario');
    }
};

