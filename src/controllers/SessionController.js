const connection = require('../database/connection')

module.exports = {
    async create(req, res) {
        const {
            id
        } = req.body

        console.log(id)
        const ong = await connection('ongs')
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