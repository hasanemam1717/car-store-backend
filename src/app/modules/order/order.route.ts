import express from 'express';
import { orderController } from './order.controller';

const router = express.Router();

router.post('/', orderController.orderCar);
router.get('/revenue', orderController.getRevenue);
router.get('/details', orderController.getDetails);

export const orderRoutes = router;
