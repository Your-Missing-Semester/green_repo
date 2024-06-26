import { Router } from 'express';
import { signUpRouter } from './signUp';
import { signInRouter } from './signIn';

export const authRouter = Router();

authRouter.use('/sign-up', signUpRouter);
authRouter.use('/sign-in', signInRouter);
