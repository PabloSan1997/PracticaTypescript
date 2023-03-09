
const datos = require("./datos.json");
const fs = require("fs");

async function actualizar(datos){
    fs.writeFile('./datos/datos.json', JSON.stringify(datos), (error)=>{
        if(!!error){
            console.log(error);
        }
    });
}

module.exports={actualizar, datos}