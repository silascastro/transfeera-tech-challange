const router = require('express').Router();
const recebedorController = require('../controllers/recebedorController')

router.get("/", recebedorController.getRecebedores)


module.exports = router;