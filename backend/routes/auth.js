const Router = require('express');
const { signUpRouter } = require('./signUp');
const { signInRouter } = require('./signIn');

const authRouter = Router();

app.use('/sign-up', signUpRouter);
app.use('/sign-in', signInRouter);

module.exports = { authRouter };
