const moongose=require('mongoose');






/*
require('dotenv').config({path:'variables.env'});

//en variables.env se configura a que base de datos se va a meter

const conectarDB=async()=>{
    try{
        await moongose.connect(process.env.DB_MONGO,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            
        })
        console.log('BD CONECTADA')
        
    }catch(error){
    console.log(error);
    process.exit(1);
    }
}
*/

module.exports=conectarDB;