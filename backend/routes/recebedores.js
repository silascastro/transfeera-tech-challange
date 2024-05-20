const router = require('express').Router();
const recebedorController = require('../controllers/recebedorController');
const recebedorMiddlaware = require('../middlawares/recebedorMiddlaware');

router.get("/recebedor", recebedorController.getRecebedores)
router.post("/recebedor",recebedorMiddlaware.validateCreateRecebedor, recebedorController.createRecebedor)


module.exports = router;