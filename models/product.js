'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
    name: String,
    picture: String,
    price: {type: Number, default: 0},
    category: { type: String , enum:['notebook', 'telefono', 'accesorios']},
    descriptions: String
})

module.exports = mongoose.model('Product', ProductSchema)