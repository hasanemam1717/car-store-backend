import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();
// 1. Create a Car
router.post('/api/cars', CarControllers.createCar);
// 2. Get All Cars
router.get('/api/cars', CarControllers.getCars);
// 3. Get a Specific Car
router.get('/api/cars/:id', CarControllers.getSpecificCar);
// 4. Update a Car
router.patch('/api/cars/:id', CarControllers.updateCar);
// 5. Delete a Car
router.delete('/api/cars/:id', CarControllers.deleteCar);

export const CarRoutes = router;
