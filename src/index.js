const express = require("express");
const bodyparser = require("body-parser");
const app = express(); 
const path = require('path');

//configuracion
app.set('json spaces',2);

// cambio de informacion
app.use(bodyparser. urlencoded({extended: false}));
app.use(bodyparser.json());

//archivos estaticos
app.use(express.static(path.join(__dirname,'../archie')));

//iniciar servidor  
app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

//rutas
app.use('/api/Comic',require('../rutas/Comic'));
