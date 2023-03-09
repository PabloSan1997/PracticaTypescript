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
        res.status(201).json(nose);
    } catch (error) {
        next(error);
    }
});
imagenes.patch('/:id', async(req, res,next)=>{
    try {
        const nose = await servicios.editar(req.params.id, req.body);
        res.json(nose);
    } catch (error) {
        next(error);
    }
});
imagenes.delete('/borrarTodo', async(req, res, next)=>{
    try {
        const mandaralv = await servicios.borrarTodo(req.body);
        res.json(mandaralv);
    } catch (error) {
        next(error);
    }
});
imagenes.delete('/:id', async(req, res,next)=>{
    try {
        const nose = await servicios.borrarUno(req.params.id, req.body);
        res.json(nose);
    } catch (error) {
        next(error);
    }
});

module.exports={imagenes}