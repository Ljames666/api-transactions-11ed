import { Request, Response } from 'express';
import { TransactionService } from '../services/transactions.service';
import { ITransaction } from '../interfaces/transaction.interface';

export class TransactionController {
    constructor(public service: TransactionService) {
        this.service = service;
    }

    insertTransaction_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const user_id = req.query.userId;
        const { title, type, value } = req.body;
        const response = this.service.insertTransaction_execute({
            title,
            type,
            value,
            user_id,
        } as ITransaction);

        if (response) {
            return res.status(200).json({ ok: true, data: response });
        }

        return res.status(400).send('Transação nao inserida. ');
    }

    getAllTransaction_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const response = this.service.getAllTransaction_execute();
        if (!response.length) {
            return res.status(404).send('sem transações. ');
        }
        return res.status(200).json({ data: response });
    }
    getAllTransactionByUser_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const user_id = req.query.userId;
        const response = this.service.getAllTransactionByUser_execute(user_id as string);

        if (!response.length) {
            return res.status(404).send(`Usuario de id ${user_id} não tem transações.`);
        }
        return res.status(200).json({ data: response });
    }

    getTransactionById_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const trans_id = req.query.transId;
        const response = this.service.getTransactionById_execute(trans_id as string);
        if (!response) {
            return res.status(404).send(`Transação de id ${trans_id} não existe.`);
        }
        return res.status(200).json({ data: response });
    }
}
