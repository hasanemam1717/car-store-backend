/* eslint-disable @typescript-eslint/no-explicit-any */

import { CarModel } from '../car/car.modle';
import { OrderModel } from './order.model';
import orderValidation from './order.validation';

export const createOrder = async (orderData: any) => {
    const { email, car, quantity, totalPrice } = orderData;

    const carData = await CarModel.findById(car);

    if (!carData) {
        throw new Error('Car not found.');
    }

    if (carData.quantity < quantity) {
        throw new Error('Insufficient stock.');
    }
    // Reduces car stock quantity according to demand.
    carData.quantity -= quantity;
    // Checks if the stock is greater than 0, then sets the inStock property to true, otherwise false.
    carData.inStock = carData.quantity > 0;

    await carData.save();

    // zod validation 
    const Validation = orderValidation.parse({ email, car, quantity, totalPrice })
    const order = await OrderModel.create(Validation);
    return order;
};

export const calculateRevenue = async () => {
    const result = await OrderModel.aggregate([
        {
            $group: {
                _id: null,
                totalRevenue: { $sum: '$totalPrice' },
            },
        },
    ]);

    return result[0]?.totalRevenue || 0;
};