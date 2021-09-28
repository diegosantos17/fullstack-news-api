const express = require("express");
const router = express.Router();

// Rotas de users
const userRouter = require('./usersRouter');
router.use('/users', userRouter);

// Rotas de profiles
// Rotas de categoreis
// Rotas de news

module.exports = router;

