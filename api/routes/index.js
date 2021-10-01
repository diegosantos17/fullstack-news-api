const express = require("express");
const router = express.Router();

// Rota de autenticação
const authRouter = require('./authRouter');
router.use('/auth', authRouter);

// Rotas de users
const userRouter = require('./usersRouter');
router.use('/users', userRouter);

// Rotas de profiles
const profileRouter = require('./profilesRouter');
router.use('/profiles', profileRouter);

// Rotas de categories
const categoryRouter = require('./categoriesRouter');
router.use('/categories', categoryRouter);

// Rotas de news
const newsRouter = require('./newsRouter');
router.use('/news', newsRouter);

module.exports = router;

