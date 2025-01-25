import express from 'express';
import { CarControllers } from './car.controller';
import auth from '../../middleware/auth';
import { USER_ROLE } from '../user/user.interface';
const router = express.Router();
// 1. Create a Car
router.post('/', auth(USER_ROLE.admin), CarControllers.createCar);
// 2. Get All Cars
router.get('/', auth(USER_ROLE.user, USER_ROLE.admin), CarControllers.getCars);
// 3. Get a Specific Car
router.get('/:id', auth(USER_ROLE.admin), CarControllers.getSpecificCar);
// 4. Update a Car
router.patch('/:id', auth(USER_ROLE.admin), CarControllers.updateCar);
// 5. Delete a Car
router.delete('/:id', auth(USER_ROLE.admin), CarControllers.deleteCar);

export const CarRoutes = router;
