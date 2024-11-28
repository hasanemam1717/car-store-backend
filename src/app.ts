import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

// using parser
app.use(express.json());
app.use(cors());

app.get('/', (req: Request, res: Response) => {
  res.send('Server is running 💨🏃‍♀️');
});

export default app;