const Router = require('express');
const { checkSchema } = require('express-validator');
const { validateLogin } = require('../handlers/login');
const { handleInputErrors } = require('../modules/middlewares');

const loginRouter = Router();

loginRouter.post(
  '/login',
  checkSchema({
    username: {
      isString: true,
    },
    password: {
      isString: true,
    },
  }),
  handleInputErrors,
  validateLogin
);

module.exports = { loginRouter };
