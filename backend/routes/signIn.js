const Router = require('express');
const { checkSchema } = require('express-validator');
const { validateSignIn } = require('../handlers/signIn');
const { handleInputErrors } = require('../modules/middlewares');

const signInRouter = Router();
const signInSchema = {
  email: {
    isEmail: true,
  },
  password: {
    isString: true,
  },
};

signInRouter.post(
  '/sign-in',
  checkSchema(signInSchema),
  handleInputErrors,
  validateSignIn
);

module.exports = { signInRouter };
