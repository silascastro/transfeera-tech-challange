const recebedorService = require("../services/recebedorService");

exports.getRecebedores = async (req, res, next) => {
    try {
        const response = await recebedorService.getRecebedores();
        return res.status(200).send(response)
    } catch (error) {
        return res.status(500).send({ message: 'Sorry, we have a internal errror!' })
    }
}