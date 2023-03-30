import Express from 'express';
import userRoutes from './user.routes';
import transactionRoutes from './transaction.routes';
import { requestcheck } from '../middlewares/validator';

export const makeRoutes = (api: Express.Application) => {
    api.use(requestcheck);
    api.use('/users', userRoutes);
    api.use('/transactions', transactionRoutes);
};
