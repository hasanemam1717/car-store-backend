import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
const app = express();

// using parser
app.use(express.json());
app.use(cors());

// routes

app.use('/', CarRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running 💨🏃‍♀️');
});

export default app;
