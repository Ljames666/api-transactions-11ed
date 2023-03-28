export enum ETypeTransaction {
    income = 'I',
    outcome = 'O',
}

export interface ITransaction {
    id: string;
    title: string;
    type: ETypeTransaction;
    value: number;
    user_id: string;
}
