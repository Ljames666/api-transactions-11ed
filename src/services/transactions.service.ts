import { ITransaction } from '../interfaces/transaction.interface';
import { DBMock } from '../models/dbMock.class';
import { Transaction } from '../models/transaction.class';

export class TransactionService {
    constructor(public database: DBMock) {
        this.database = database;
    }

    insertTransaction_execute({ title, type, value, user_id }: ITransaction) {
        const newTransaction = new Transaction(title, type, value, user_id);

        this.database.addTransaction(newTransaction);
        return newTransaction;
    }
    getAllTransaction_execute() {
        return this.database.transactionAll;
    }
    getAllTransactionByUser_execute(user_id: string) {
        const result = this.database.findTransactionsByUser(user_id);
        return result;
    }
    getTransactionById_execute(transId: string) {
        const result = this.database.findOneTransactionByUser(transId);
        return result;
    }
}
