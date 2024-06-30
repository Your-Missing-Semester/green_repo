import { Router } from 'express';
import { signUpRouter } from './signUp.ts';
import { signInRouter } from './signIn.ts';

export const authRouter = Router();

authRouter.use('/sign-up', signUpRouter);
authRouter.use('/sign-in', signInRouter);
