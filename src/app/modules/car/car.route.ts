import express from 'express';
import { CarControllers } from './car.controller';
const router = express.Router();
// 1. Create a Car
router.post('/', CarControllers.createCar);
// 2. Get All Cars
router.get('/', CarControllers.getCars);
// 3. Get a Specific Car
router.get('/:id', CarControllers.getSpecificCar);
// 4. Update a Car
router.patch('/:id', CarControllers.updateCar);
// 5. Delete a Car
router.delete('/:id', CarControllers.deleteCar);

export const CarRoutes = router;
