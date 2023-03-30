import { Router } from 'express';
import { TransactionController } from '../controllers/transaction.controller';
import { database } from '../models/dbMock.class';
import { TransactionService } from '../services/transactions.service';
import { reqVadidator } from '../middlewares/validator';

const service = new TransactionService(database);
const controller = new TransactionController(service);

const transactionRoutes = Router();

transactionRoutes.post('/:userId', reqVadidator, (req, res) =>
    controller.insertTransaction_Handler({ req, res })
);

transactionRoutes.get('/', (req, res) => controller.getAllTransaction_Handler({ req, res }));
transactionRoutes.get('/:userId', (req, res) =>
    controller.getAllTransactionByUser_Handler({ req, res })
);
transactionRoutes.get('/t/:transId', (req, res) =>
    controller.getTransactionById_Handler({ req, res })
);

transactionRoutes.put('/:transId', reqVadidator, (req, res) =>
    controller.updateTrasanction_Handler({ req, res })
);

transactionRoutes.delete('/:transId', (req, res) =>
    controller.deleteOneTransaction_Handler({ req, res })
);

export default transactionRoutes;
