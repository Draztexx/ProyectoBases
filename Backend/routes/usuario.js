//rutas para usuario
const express = require('express');
const router  = express.Router();
const usuarioController= require('../controllers/usuarioController');

router.post('/',usuarioController.crearUsuario);
router.get('/')

module.exports=router;

