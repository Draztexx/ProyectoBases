const express = require('express');
const mongoose=require('mongoose');
//const conectarDB= require('./config/db');
const cookieParser = require('cookie-parser');
const cors= require("cors");

const url = "mongodb://127.0.0.1:27017/meanproductos"



//conectarDB();


mongoose.connect(url,{})
    .then(result=>console.log("database conectada"))
    .catch(err=>console.log(err))

const port= 4000;
const app= express();  

app.listen(port,()=>{
    console.log("Servidor Corriendo en el puerto "+ port)
})




app.use(cors())

app.use(express.json());
app.use(cookieParser());




//Definimos una ruta principal

app.use('/api/productos', require('./routes/producto'));
app.use('/api/usuarios',require('./routes/usuario'));
app.use('/api/finalizarcompra',require('./routes/carrito'));
app.use('/api/miscompras',require('./routes/carrito'));
/*
app.get('/',(req,res)=>{
    res.send('HOLA MUNDO');
})
*/

