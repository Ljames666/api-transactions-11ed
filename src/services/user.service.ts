import { IUser } from '../interfaces/user.interface';
import { DBMock } from '../models/dbMock.class';
import { User } from '../models/user.class';

export class UserService {
    constructor(public database: DBMock) {
        this.database = database;
    }

    createUser_execute({ name, cpf, email, age }: IUser) {
        const newUser = new User(name, cpf, email, age);

        this.database.addUser(newUser);
        return newUser;
    }

    getAllUser_execute() {
        return this.database.userAll;
    }
    getUserById_execute(id: string) {
        try {
            const result = this.database.findUser(id);

            if (!result) {
                throw new Error('Usuario não existe!');
            }

            return result;
        } catch (error) {
            if (error instanceof Error) {
                return error;
            }
        }
    }

    deleteUser_execute(id: string) {
        try {
            const result = this.database.removeOneUser(id);
            if (!result) {
                throw new Error('sem usuarios');
            }
            return result;
        } catch (error) {
            if (error instanceof Error) {
                return error;
            }
        }
    }

    update_execute({ id, name, cpf, email, age }: IUser) {
        try {
            const result = this.database.updateUser({ id, name, cpf, email, age });
            if (!result) {
                throw new Error('sem usuarios');
            }
            return result;
        } catch (error) {
            if (error instanceof Error) {
                return error;
            }
        }
    }
}
