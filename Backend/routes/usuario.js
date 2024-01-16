//rutas para usuario
const express = require('express');
const router  = express.Router();

const usuarioController= require('../controllers/usuarioController');
const {authRequired} =require ('../middlewares/validatetoken');
const {tipoAdminRequired} =require ('../middlewares/validatetoken');



router.post('/',usuarioController.crearUsuario);
router.post('/login',usuarioController.obtenerUsuario);
router.post('/logout',authRequired,tipoAdminRequired,usuarioController.cerrar);
router.post('/register',usuarioController.crearUsuario);

module.exports=router;

