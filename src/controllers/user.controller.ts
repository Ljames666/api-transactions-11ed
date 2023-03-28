import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { IUser } from '../interfaces/user.interface';

export class UserController {
    constructor(public service: UserService) {
        this.service = service;
    }

    createUser_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const { name, cpf, email, age } = req.body;
        const response = this.service.createUser_execute({ name, cpf, email, age } as IUser);

        if (response) {
            return res.status(200).json({ ok: true, data: response });
        }

        return res.status(400).send('Usuario nao cadastrado. ');
    }
    getAllUser_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const response = this.service.getAllUser_execute();
        if (!response) {
            return res.status(404).send('sem usuarios. ');
        }
        return res.status(200).json({ data: response });
    }

    getUserById_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const id = req.params.id;
        const response = this.service.getUserById_execute(id);
        if (!response) {
            return res.status(404).send('Usuario não encontrado! ');
        }
        return res.status(200).json({ data: response });
    }

    deleteUser_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const id = req.params.id;
        const response = this.service.deleteUser_execute(id);
        if (response instanceof Error) {
            return res.status(404).send(response.message);
        }
        return res
            .status(200)
            .json({ message: `Usuario de id ${id}, deletado com sucesso!`, data: response });
    }

    updateUser_Handler({
        req,
        res,
    }: {
        req: Request;
        res: Response;
    }): Response<any, Record<string, any>> {
        const id = req.params.id;
        const { name, cpf, email, age } = req.body;
        const response = this.service.update_execute({ id, name, cpf, email, age });
        if (response instanceof Error) {
            return res.status(404).send(response.message);
        }
        return res
            .status(200)
            .json({ message: `Usuario de id ${id}, deletado com sucesso!`, data: response });
    }
}
