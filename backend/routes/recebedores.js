const router = require('express').Router();
const recebedorController = require('../controllers/recebedorController');
const recebedorMiddlaware = require('../middlawares/recebedorMiddlaware');

router.get("/recebedor", recebedorController.getRecebedores)
router.post("/recebedor",recebedorMiddlaware.validateCreateRecebedor, recebedorController.createRecebedor)
router.put("/recebedor/:id", recebedorController.updateRecebedor)
router.delete("/recebedor/:id", recebedorController.deleteRecebedor)


module.exports = router;