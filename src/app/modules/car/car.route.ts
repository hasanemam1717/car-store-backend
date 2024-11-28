import express from 'express'
import { CarControllers } from './car.controller'
const router = express.Router()

router.post('/api/cars', CarControllers.createCar)

export const CarRoutes = router