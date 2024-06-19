const Router = require('express');
const { checkSchema } = require('express-validator');
const { validateLogin } = require('../handlers/login');
const { handleInputErrors } = require('../modules/middlewares');

const loginRouter = Router();
const loginSchema = {
  username: {
    isString: true,
  },
  password: {
    isString: true,
  },
};

loginRouter.post(
  '/login',
  checkSchema(loginSchema),
  handleInputErrors,
  validateLogin
);

module.exports = { loginRouter };
