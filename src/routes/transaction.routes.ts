import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { database } from '../models/dbMock.class';
import { TransactionService } from '../services/transactions.service';

const service = new TransactionService(database);
const controller = new TransactionController(service);

const transactionRoutes = Router();
transactionRoutes.post('/', (req, res) => controller.insertTransaction_Handler({ req, res }));
transactionRoutes.get('/', (req, res) => controller.getAllTransaction_Handler({ req, res }));
transactionRoutes.get('/?userId', (req, res) =>
    controller.getAllTransactionByUser_Handler({ req, res })
);
transactionRoutes.get('/?transId', (req, res) =>
    controller.getTransactionById_Handler({ req, res })
);

export default transactionRoutes;
