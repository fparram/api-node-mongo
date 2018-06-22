'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductoSchema = Schema({
    nombre: string,
    foto: string,
    precio: {type: number, default: 0},
    catagoria: { type: string , enum:['notebook', 'telefono', 'accesorios']},
    descripcion: string
})

mongoose.model('Productos', ProductoSchema)