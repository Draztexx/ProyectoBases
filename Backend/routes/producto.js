//rutas para producto
const express = require('express');
const router = express.Router();
const productoController= require('../controllers/productoController');
const {authRequired} =require ('../middlewares/validatetoken');

// api/productos

router.post('/',productoController.crearProducto);
router.get('/',productoController.obtenerProductos);
router.put('/:id',productoController.actualizarProducto);
router.get('/:id',productoController.obtenerProducto);
router.delete('/:id',productoController.eliminarProducto);

module.exports=router;