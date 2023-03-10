import axios from 'axios'
import React from 'react'

export async function mandar(mensaje:object, setImagenes:Function):Promise<void>{
    try {
        const mandar = await axios.post('http://localhost:4001/api/v1/imagenes/',mensaje);
        setImagenes(Math.random());
        console.log(mandar.data);
    } catch (error) {
        console.log("Error al mandar datos");
    }
}