const Router = require('express');
const { body } = require('express-validator');
const { validateLogin } = require('../handlers/login');
const { handleInputErrors } = require('../modules/middleware');

const loginRouter = Router();

loginRouter.post(
  '/login',
  body('username').isString(),
  body('password').isString(),
  handleInputErrors,
  validateLogin
);

module.exports = { loginRouter };
