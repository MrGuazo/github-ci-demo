const express = require('express');
const holamundo = express();
holamundo.get('/', (req, res) =>
res.send('Hola Mundo!'));

// Function to handle the root path
holamundo.get('/division', async function(req, res) {

    // Access the provided 'page' and 'limt' query parameters
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);

    res.send("La división es: "+ (num1 / num2));
});


module.exports = holamundo;
