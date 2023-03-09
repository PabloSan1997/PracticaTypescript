const express = require('express');
const app = express();
const cors = require('cors');
const { createApi } = require('./routers');
const { handleBooom } = require('./middlewares/boomHandke.js');
const PUERTO = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());

createApi(app);
app.use(handleBooom);
app.get("/",(req, res)=>{
    res.json({
        mensaje:"Bienvenido a mi API"
    });
});

app.listen(PUERTO, mensaje(PUERTO));

function mensaje(e){
    console.log(`http://localhost:${e}/`);

}