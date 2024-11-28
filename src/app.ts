import express, { Request, Response } from 'express';
import cors from 'cors';
import { CarRoutes } from './app/modules/car/car.route';
import { orderRouter } from './app/modules/order/order.route';
const app = express();

// using parser
app.use(express.json());
app.use(cors());

// car routes
app.use('/', CarRoutes);

// order routers
app.use('/', orderRouter)


app.get('/', (req: Request, res: Response) => {
  res.send('Server is running 💨🏃‍♀️');
});

export default app;
