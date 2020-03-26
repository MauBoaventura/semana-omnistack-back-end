const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const {
            id
        } = req.body

        const ong = await connection('ong')
            .select('name')
            .where("id", id)
            .first()

        if (!ong)
            return res.status(400).send({
                error: "Ong not found!"
            })
        res.json(ong)


    }

}