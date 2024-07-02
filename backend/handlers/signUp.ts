import { Request, Response } from 'express';

export const handleSignUp = async (req: Request, res: Response) => {
  // TODO : T33: Create signup method in backend
  res.status(200).json({ message: 'success message for testing api route' });
};
