const Router = require('express');
const { checkSchema } = require('express-validator');
const { handleSignUp } = require('../handlers/signUp');
const { handleInputErrors } = require('../modules/middlewares');

const signUpRouter = Router();
const signUpSchema = {
  email: {
    isString: true,
  },
  password: {
    isString: true,
  },
};

signUpRouter.post(
  '/sign-up',
  checkSchema(signUpSchema),
  handleInputErrors,
  handleSignUp
);

module.exports = { signUpRouter };
