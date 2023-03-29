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
}

export const database = new DBMock();
