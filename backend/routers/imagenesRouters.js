const express = require('express');
const { ServicioImagenes } = require('../servicios/serviciosImagenes.js');

const servicios = new ServicioImagenes();
const imagenes = express.Router();

imagenes.get('/',async (req, res, next)=>{
    try {
        const datos = await servicios.leer();
        res.json(datos);
    } catch (error) {
        next(error);
    }
});

imagenes.get("/:id", async(req, res, next)=>{
    const {id}=req.params;
    try {
        const dato = await servicios.leerUno(id);
        res.json(dato);
    } catch (error) {
        next(error);
    }
})

imagenes.post('/', async(req, res,next)=>{
    try {
        const nose = await servicios.agregar(req.body);
        res.json(nose);
    } catch (error) {
        next(error);
    }
});
module.exports={imagenes}