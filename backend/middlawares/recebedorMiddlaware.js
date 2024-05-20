const { validRecebedorRequestPayloadKeys } = require("../constants/recebedorConstants");


exports.validateCreateRecebedor = async (req, res, next) => {
    const payload = req.body;
    const payloadKeys = Object.keys(payload);
    const payloadValues = Object.values(payload);

    const validRequestPayload = validRecebedorRequestPayloadKeys.every((key) => payloadKeys.includes(key));
    const validRequestPayloadContent = payloadValues.every((propertie) => typeof propertie === "string" && propertie.length > 0);

    if(!validRequestPayload || !validRequestPayloadContent){
        res.status(400).send({message: 'payload inválido ou incompleto!'})
    }else{
        next();
    }
}