const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
res.send('Hola Mundo!'));

holamundo.get ('/porcentaje', (req, res) => {

    let num1 = parseInt (req.query.num1);
    let num2 = parseInt (req.query.num2);
    
    res.send ("el porcentaje es: "+ (num1 % num2)); 

});  
module.exports = holamundo;


