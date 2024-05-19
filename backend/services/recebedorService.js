const Recebedor = require('../models/recebedor')

exports.getRecebedores = async () => {
    try {
        const response = await Recebedor.findAll();
    } catch (error) {
        throw new Error("Erro ao obter recebedores!");
    }    
}