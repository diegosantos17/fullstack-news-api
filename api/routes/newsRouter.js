var express = require('express');
var router = express.Router();
const { verifyJWT } = require('../../middleware/jwtVerify');

let newsController = require('../controllers/newsController');

router.get('', newsController.find);
router.get('/:index', newsController.findById);
router.post('', verifyJWT, newsController.create);
router.put('/:index', verifyJWT, newsController.update);
router.delete('/:index', verifyJWT, newsController.destroy);

module.exports = router;