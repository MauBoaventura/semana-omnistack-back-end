const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {

    async index(req, res) {
        const {
            page = 1
        } = req.query

        const [count] = await connection('ongs').count()
        let dados = await connection('ongs')
            .limit(5)
            .offset((page - 1) * 5)
            .select("*")

        res.header('X-Total-Count', count['count(*)'])
        res.json(dados)
    },
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

    }

};