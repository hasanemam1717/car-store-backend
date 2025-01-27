import express, { Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes';
import notFound from './app/middleware/notFound';
import globalErrorHandler from './app/errors/globalErrorHandler';
const app = express();

// using parser
app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173' }));

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
