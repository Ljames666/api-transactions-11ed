import { v4 } from 'uuid';

import { ETypeTransaction, ITransaction } from '../interfaces/transaction.interface';

export class Transaction implements ITransaction {
    id: string;
    constructor(
        public title: string,
        public type: ETypeTransaction,
        public value: number,
        public user_id: string
    ) {
        this.id = v4();
        this.title = title;
        this.type = type;
        this.value = value;
        this.user_id = user_id;
    }
}
