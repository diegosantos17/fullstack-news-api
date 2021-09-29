const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../../middleware/jwtVerify")

const usersController = require("../controllers/usersController");

router.get('', verifyJWT, usersController.find);
router.get('/:index', verifyJWT, usersController.findById);
router.post('', verifyJWT, usersController.create);
router.put('/:index', verifyJWT, usersController.update);

module.exports = router; 