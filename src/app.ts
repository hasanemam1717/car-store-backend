import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import globalErrorHandler from './app/middleware/globalErrorHandler';
import notFound from './app/middleware/notFound';
const app = express();

// using parser
app.use(express.json());
app.use(cors());

// using router 
app.use('/api', router)


app.get('/', (req: Request, res: Response) => {
  res.send('Server is running 💨🏃‍♀️');
});
// Global error handler 
app.use(globalErrorHandler)

//Not found 
app.use(notFound)

export default app;
