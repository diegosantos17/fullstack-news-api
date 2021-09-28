const express = require("express");
const router = express.Router();

const usersController = require("../controllers/usersController");

router.get('', usersController.find);
router.get('/:index', usersController.findById);
router.post('', usersController.create);
router.put('/:index', usersController.update);

module.exports = router; 