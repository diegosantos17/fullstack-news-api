var express = require('express');
var router = express.Router();
const { verifyJWT } = require('../../middleware/jwtVerify');

let categoriesController = require('../controllers/categoriesController');

router.get('', verifyJWT, categoriesController.find);
router.get('/:index', verifyJWT, categoriesController.findById);
router.post('', verifyJWT, categoriesController.create);
router.put('/:index', verifyJWT, categoriesController.update);
router.delete('/:index', verifyJWT, categoriesController.destroy);

module.exports = router;