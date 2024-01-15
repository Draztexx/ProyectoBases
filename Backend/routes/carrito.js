const express=require('express');
const router=express.Router();
const carritoController=require('../controllers/carritoController');

router.post('/',carritoController.crearCarrito);

module.exports=router;