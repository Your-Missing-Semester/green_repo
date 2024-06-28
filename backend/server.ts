import express, { Request, Response } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import { authRouter } from './routes/auth';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/healthcheck', (req: Request, res: Response) => {
  res.json({ message: 'hello' });
});

app.use('/api/auth', authRouter);
