const Router = require('express');
const { checkSchema } = require('express-validator');
const { handleSignUp } = require('../handlers/signUp');
const { handleInputErrors } = require('../modules/middlewares');

const signUpRouter = Router();
const signUpSchema = {
  firstName: {
    isString: true,
    errorMessage: 'First name must be a string',
  },
  lastName: {
    isString: true,
    errorMessage: 'Last name must be a string',
  },
  email: {
    isEmail: true,
    errorMessage: 'Invalid email format',
  },
  password: {
    isString: true,
    errorMessage: 'Password must be a string',
    matches: {
      options: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      errorMessage:
        'Password must contain at least one number, lowercase, uppercase letter and a special character, and be at least 8 characters long',
    },
  },
};

signUpRouter.post(
  '/sign-up',
  checkSchema(signUpSchema),
  handleInputErrors,
  handleSignUp
);

module.exports = { signUpRouter };
