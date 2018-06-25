'use strict'

const express = require('express')
const ProductCrtl = require('../controlers/product')
const userCtrl = require('../controlers/user')
const auth = require('../middlewares/auth')
const api = express.Router()

api.get('/product', auth, ProductCrtl.getProducts)
api.get('/product/:productId',auth, ProductCrtl.getProduct)
api.post('/product',auth, ProductCrtl.saveProduct)
api.put('/product/:productId',auth, ProductCrtl.updateProduct)
api.delete('/product/:productId',auth, ProductCrtl.deleteProduct)
api.post('/signup', userCtrl.signUp)
api.post('/signin', userCtrl.signIn)
api.get('/private', auth, (req, res) => {
    res.status(200).send({ mensaje: 'Tienes Acceso'})
})

module.exports = api