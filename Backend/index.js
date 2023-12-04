const express = require('express');
const conectarDB= require('./config/db');

//Creamos el servidor

const app= express();
//Conectamos a la base de datos
conectarDB();

app.use(express.json());

//Definimos una ruta principal

app.use('/api/productos', require('./routes/producto'));
/*
app.get('/',(req,res)=>{
    res.send('HOLA MUNDO');
})
*/

app.listen(4000, ()=> {
    console.log('El servidor esta corriendo perfectamente')
})