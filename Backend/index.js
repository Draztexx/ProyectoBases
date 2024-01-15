const express = require('express');
const conectarDB= require('./config/db');
const cookieParser = require('cookie-parser');
const cors= require("cors");

//Creamos el servidor

const app= express();
//Conectamos a la base de datos
conectarDB();
app.use(cors())

app.use(express.json());
app.use(cookieParser());




//Definimos una ruta principal

app.use('/api/productos', require('./routes/producto'));
app.use('/api/usuarios',require('./routes/usuario.js'));
/*
app.get('/',(req,res)=>{
    res.send('HOLA MUNDO');
})
*/

app.listen(4000, ()=> {
    console.log('El servidor esta corriendo perfectamente')
})