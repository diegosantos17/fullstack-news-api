const express = require("express");
const router = express.Router();

const authController = require("../controllers/authController");
const { verifyJWT } = require("../../middleware/jwtVerify");

router.post('', authController.auth);
router.post('/renew', verifyJWT, authController.renew);

module.exports = router;