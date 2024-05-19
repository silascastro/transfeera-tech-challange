const recebedorService = require("../services/recebedorService")

exports.getRecebedores = async(req, res, next) => {

    try {
        const response = recebedorService.getRecebedores();
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send({ message: 'Sorry, we have a internal errror!'})
    }
}