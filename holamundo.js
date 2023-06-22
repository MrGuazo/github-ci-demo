const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
res.send('Hola Mundo!'));

holamundo.get('/multiplicar', (req,multi)=>{

    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
 
    multi.send("la multiplicación es: " + (num1*num2));
});


module.exports = holamundo;

