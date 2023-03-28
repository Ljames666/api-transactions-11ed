import Express from 'express';
import userRoutes from './user.routes';

export const makeRoutes = (api: Express.Application) => {
    api.use('/users', userRoutes);
};
