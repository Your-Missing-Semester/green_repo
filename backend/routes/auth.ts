const Router = require('express');
const { signUpRouter } = require('./signUp');
const { signInRouter } = require('./signIn');

const authRouter = Router();

authRouter.use('/sign-up', signUpRouter);
authRouter.use('/sign-in', signInRouter);

module.exports = { authRouter };
