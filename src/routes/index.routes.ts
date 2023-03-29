import Express from 'express';
import userRoutes from './user.routes';
import transactionRoutes from './transaction.routes';

export const makeRoutes = (api: Express.Application) => {
    api.use('/users', userRoutes);
    api.use('/transactions', transactionRoutes);
};
