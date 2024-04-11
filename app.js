// Entry point

let fs  = require('fs');
// console.log(fs)

let moment = require('moment')
// console.log(moment().date("2000/05/10"))

let datos = fs.readFileSync('./prueba.txt', 'utf-8').split('\n');
// console.log(datos);

// --------------------------------------------------------------------

const express = require('express');
const app     = express();
const path    = require('path');

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/views/home.html'));
});

app.get("/product", (req, res) =>{
    res.send("Estamos en los productos")
})

app.listen(3000, ()=>{
    console.log(`Server is listening on port 3000`);
});