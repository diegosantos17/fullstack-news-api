const express = require("express");
const router = express.Router();
const { verifyJWT } = require("../../middleware/jwtVerify")

const profilesController = require("../controllers/profilesController");

router.get('', verifyJWT, profilesController.find);
router.get('/:index', verifyJWT, profilesController.findById);
router.post('', verifyJWT, profilesController.create);
router.put('/:index', verifyJWT, profilesController.update);
router.delete('/:index', verifyJWT, profilesController.destroy);

module.exports = router;