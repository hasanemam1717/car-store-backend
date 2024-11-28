import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/api/orders', orderController.orderCar);
router.get('/api/orders/revenue', orderController.getRevenue);

export const orderRouter = router;
