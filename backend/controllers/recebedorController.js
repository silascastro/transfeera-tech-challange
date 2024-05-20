const recebedorService = require("../services/recebedorService");

exports.getRecebedores = async (req, res, next) => {
    try {
        const response = await recebedorService.getRecebedores();
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ message: 'Descupe, tivemos um erro!' });
    }
}

exports.createRecebedor = async (req, res, next) => {
    const payload = req.body;
    if(Object.keys(payload).length === 0){
        return res.status(400).send({
            fail: {
                message: "falha ao tentar criar recebedor"
            }
        });
    }
    
    try {
        await recebedorService.createRecebedor(payload);
        return res.status(201).send({success: {
            message: 'Recebedor criado com sucesso!'
        }});
    } catch (error) {
        return res.status(500).send({ message: 'Descupe, tivemos um erro!' });
    }
}

exports.updateRecebedor = async (req, res, next) => {
    const {id} = req.params;
    const payload = req.body;
    if(Object.keys(payload).length === 0){
        return res.status(400).send({
            fail: {
                message: "falha ao tentar criar recebedor"
            }
        });
    }
    
    try {
        await recebedorService.updateRecebedor(id, payload);
        return res.status(200).send({ message: 'Recebedor atualizado com sucesso!' });
    } catch (error) {
        return res.status(500).send({ message: 'Descupe, tivemos um erro!' });
    }
}

exports.deleteRecebedor = async (req, res, next) => {
    const {id} = req.params;
    try {
        response = await recebedorService.deleteRecebedor(id);
        return res.status(200).send({ message: 'Recebedor removido com sucesso!' });
    } catch (error) {
        return res.status(500).send({ message: 'Descupe, tivemos um erro!' });
    }
}