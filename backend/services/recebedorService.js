const Recebedor = require('../models/recebedor');

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

exports.updateRecebedor = async (id, payload) => {
    try {
        let recebedor = await Recebedor.findOne({where: {id}});
        recebedor.update(payload);
        recebedor.save();
    } catch (error) {
        throw new Error("Erro ao criar recebedor!");
    }    
}

exports.deleteRecebedor = async (id) => {
    try {
        await Recebedor.destroy({where: {id}});
    } catch (error) {
        throw new Error("Erro ao criar recebedor!");
    }    
}