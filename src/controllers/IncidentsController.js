const crypto = require('crypto')
const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        const dados = await connection('incidents').select('*')
        res.json(dados)
    },
    async create(req, res) {
        const {
            title,
            description,
            value
        } = req.body
        const ong_id = req.headers.authorization;
        const [id] = await connection('incidents').insert({
            ong_id,
            title,
            description,
            value
        })


        res.json({
            id
        })


    },
    async delete(req, res) {
        const id = req.params.id;
        const ong_id = req.headers.authorization;

        const incident = await connection('incidents')
            .where("id", id)
            .select('ong_id')
            .first()
        console.log(incident)
        if (incident == undefined)
            return res.status(401).json({
                error: "Case not exist"
            })

        if (incident.ong_id !== ong_id)
            return res.status(401).json({
                error: "Not permited"
            })
        await connection('incidents').where("id", id).delete()

        res.status(204).send()
    }
};