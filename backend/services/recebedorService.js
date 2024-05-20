const Recebedor = require('../models/recebedor')

exports.getRecebedores = async () => {
    try {
        const response = await Recebedor.findAll();
        return response;
    } catch (error) {
        throw new Error("Erro ao obter recebedores!");
    }    
}

exports.createRecebedor = async (payload) => {
    try {
        const response = await Recebedor.create(payload);
        return response;
    } catch (error) {
        throw new Error("Erro ao criar recebedor!");
    }    
}

exports.updateRecebedor = async (payload) => {
    try {
        const response = await Recebedor.create(payload);
        return response;
    } catch (error) {
        throw new Error("Erro ao criar recebedor!");
    }    
}