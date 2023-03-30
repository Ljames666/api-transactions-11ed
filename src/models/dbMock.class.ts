import { IUser } from '../interfaces/user.interface';
import { ITransaction } from '../interfaces/transaction.interface';

export class DBMock {
    private userList: IUser[] = [];
    private transactionsList: ITransaction[] = [];

    get userAll() {
        return this.userList;
    }
    get transactionAll() {
        return this.transactionsList;
    }

    // TODO: metodos de manipulação do array de usuarios
    addUser(user: IUser): void {
        this.userList.push(user);
    }

    findUser(id: string) {
        const user = this.userList.find((item) => item.id === id);
        return user;
    }

    removeOneUser(id: string) {
        const removeUser = this.userList.findIndex((user) => user.id === id);
        if (removeUser < 0) {
            return null;
        }
        this.userList.splice(removeUser, 1);
        return this.userList;
    }

    updateUser({ id, name, cpf, email, age }: IUser) {
        const index = this.userList.findIndex((user) => user.id === id);
        if (index < 0) {
            return null;
        }

        const updatedUser = {
            id,
            name: name ? name : this.userList[index].name,
            cpf: cpf ? cpf : this.userList[index].cpf,
            email: email ? email : this.userList[index].email,
            age: age ? age : this.userList[index].age,
        };

        this.userList.splice(index, 1, updatedUser);
        return updatedUser;
    }

    // TODO: metodos de manipulação do array de transações
    addTransaction(transaction: ITransaction): void {
        this.transactionsList.push(transaction);
    }
    findTransactionsByUser(user_id: string) {
        const list = this.transactionsList.filter((tras) => tras.user_id === user_id);
        return list;
    }

    findOneTransactionByUser(transId: string) {
        return this.transactionsList.find((trans) => trans.id === transId);
    }

    updateTransaction(data: { trans_id: string; title: any; type: any; value: any }) {
        const index = this.transactionsList.findIndex((trans) => trans.id === data.trans_id);

        if (index < 0) {
            return null;
        }

        const newTransaction = {
            id: this.transactionsList[index].id,
            title: data.title ? data.title : this.transactionsList[index].title,
            type: data.type ? data.type : this.transactionsList[index].type,
            user_id: this.transactionsList[index].user_id,
            value: data.value ? data.value : this.transactionsList[index].value,
        };

        this.transactionsList.splice(index, 1, newTransaction);
        return {
            newTransaction,
            allTransactions: this.transactionsList.filter(
                (t) => t.user_id === this.transactionsList[index].user_id
            ),
        };
    }

    deleteOneTransaction(trans_id: string) {
        const transaction = this.transactionsList.findIndex((t) => t.id === trans_id);
        if (transaction < 0) {
            return null;
        }
        const removedTransaction = this.transactionsList[transaction];
        this.transactionsList.splice(transaction, 1);

        return { removed: removedTransaction, data: this.transactionsList };
    }
}

export const database = new DBMock();
