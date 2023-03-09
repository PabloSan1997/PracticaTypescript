const express = require('express');
const { imagenes } = require('./imagenesRouters.js');


const principal = express.Router();

function createApi(app){
    app.use('/api/v1', principal);
    principal.use('/imagenes', imagenes);
} 

module.exports={createApi}