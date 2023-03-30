import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { database } from '../models/dbMock.class';
import { UserService } from '../services/user.service';
import { reqVadidator } from '../middlewares/validator';

const service = new UserService(database);
const controller = new UserController(service);

const userRoutes = Router();

userRoutes.post('/', reqVadidator, (req, res) => controller.createUser_Handler({ req, res }));
userRoutes.get('/', (req, res) => controller.getAllUser_Handler({ req, res }));
userRoutes.get('/:id', (req, res) => controller.getUserById_Handler({ req, res }));
userRoutes.put('/:id', reqVadidator, (req, res) => controller.updateUser_Handler({ req, res }));
userRoutes.delete('/:id', (req, res) => controller.deleteUser_Handler({ req, res }));

export default userRoutes;
