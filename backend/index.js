const express = require('express');
const app = express();
const cors = require('cors');
const PUERTO = process.env.PORT || 4001;

app.use(express.json());
app.use(cors());
app.get("/",(req, res)=>{
    res.json({
        mensaje:"Bienvenido a mi API"
    });
});

app.listen(PUERTO);
