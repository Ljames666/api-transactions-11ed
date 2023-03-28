import { makeRoutes } from './routes/index.routes';
import express, { Request, Response } from 'express';
import cors from 'cors';
import userRoutes from './routes/user.routes';

const api = express();
const port = 8081;

api.use(express.json(), cors());

api.get('/', (req: Request, res: Response) =>
    res.status(200).send(`
<h1>Api Trasanctions</h1>
<p> Api de estudo da 11ed <span style="color:red;">GROWDEV</span></p>
`)
);

makeRoutes(api);

api.listen(port, () => console.log(`Server is running in port ${port}`));
