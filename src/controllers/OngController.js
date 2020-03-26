const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const id = crypto.randomBytes(4).toString('HEX')
        const {
            name,
            email,
            whatsapp,
            city,
            uf
        } = req.body

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

    },
    
    async index(req, res) {
        let dados = await connection('ongs').select("*")

        console.log(dados)
        res.json(dados)
    }
};