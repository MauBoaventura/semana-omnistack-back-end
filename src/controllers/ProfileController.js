const connection = require('../database/connection')
module.exports = {
    async index(req, res) {
        const ong_id = req.headers.authorization;
        const dados = await connection('incidents')
            .select('*')
            .where('ong_id', ong_id)
        res.json(dados)
    }

}