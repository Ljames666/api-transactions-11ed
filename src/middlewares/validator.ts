import { NextFunction, Request, Response } from 'express';

export const requestcheck = (req: Request, res: Response, next: NextFunction) => {
    console.log(req.method);
    console.log(req.body);
    console.log(req.params);
    console.log(req.headers);
    console.log(req.path);
    console.log(req.cookies);

    next();
};

export const reqVadidator = (req: Request, res: Response, next: NextFunction) => {
    if (Object.values(req.body).some((ele) => !ele)) {
        return res.status(418).json({ message: 'Cê é loko tio' });
    }
    next();
};
