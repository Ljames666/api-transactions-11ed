import { v4 } from 'uuid';
import { IUser } from '../interfaces/user.interface';

export class User implements IUser {
    id: string;
    constructor(
        public name: string,
        public cpf: string | number,
        public email: string,
        public age: number
    ) {
        this.id = v4();
        this.name = name;
        this.cpf = cpf;
        this.email = email;
        this.age = age;
    }
}
