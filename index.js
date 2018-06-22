'use strict'

const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Producto = require('./models/producto')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json());

app.get('/api/producto', (req, res) => {
    res.send(200, {producto: []})
})

app.get('/api/producto/:productoId', (req, res) => {

})

app.post('/api/producto', (req, res) => {
    console.log(req.body)
    res.send(200, {mensaje: 'El producto se ha recibido'})    
})

app.put('/api/producto/:productoId', (req, res) => {

})

app.delete('/api/producto/:productoId', (req, res) => {

})

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
    if(err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexion a la base de datos establecida..')
    app.listen(3000, () => {
        console.log(`API Rest corriendo en el puerto: ${port}`)
    })
})

