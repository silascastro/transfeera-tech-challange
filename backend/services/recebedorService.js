const Recebedor = require('../models/recebedor')

exports.getRecebedores = async () => {
    try {
        const response = await Recebedor.findAll();
        console.log(response)
        return response;
    } catch (error) {
        throw new Error("Erro ao obter recebedores!");
    }    
}