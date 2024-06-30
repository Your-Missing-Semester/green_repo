import { Router } from 'express';
import { checkSchema, Schema } from 'express-validator';
import { validateSignIn } from '../handlers/signIn.ts';
import { handleInputErrors } from '../modules/middlewares.ts';

export const signInRouter = Router();

const signInSchema: Schema = {
  email: {
    isEmail: true,
    errorMessage: 'Invalid email format',
  },
  password: {
    isString: true,
    errorMessage: 'Password must be a string',
  },
};

signInRouter.post(
  '/',
  checkSchema(signInSchema),
  handleInputErrors,
  validateSignIn
);
