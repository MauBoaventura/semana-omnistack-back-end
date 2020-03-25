const express = require('express')
const crypto = require('crypto')
const routes = express.Router()
const connection = require('./database/connection')
routes.get('/index', (req, res) => {
    res.json(req.body)
})

routes.post('/ongs', async (req, res) => {
    const {
        name,
        email,
        whatsapp,
        city,
        uf
    } = req.body

    const id = crypto.randomBytes(4).toString('HEX')

    await connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf
    })

    res.json({
        id
    })

})

routes.get('/index', (req, res) => {
    res.json(req.body)
})

routes.get('/index', (req, res) => {
    res.json(req.body)
})


module.exports = routes