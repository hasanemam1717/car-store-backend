/* eslint-disable @typescript-eslint/no-explicit-any */

import { CarModel } from '../car/car.modle';
import { OrderModel } from './order.model';
import orderValidation from './order.validation';

const createOrder = async (orderData: any) => {
  const { userId, carId, quantity, price } = orderData;

  const carData = await CarModel.findById(carId);

  if (!carData) {
    throw new Error('Car not found.');
  }

  if (carData.quantity < quantity) {
    throw new Error('This car is out of stock!');
  }
  // Reduces car stock quantity when order.
  carData.quantity = carData.quantity - quantity;
  // Checks if the stock is greater than 0, then sets the inStock property to true, otherwise false.
  carData.inStock = carData.quantity > 0;

  await carData.save();

  // zod validation
  const Validation = orderValidation.parse({
    userId,
    carId,
    quantity,
    price,
    totalPrice: Number(quantity * price)
  });
  const order = await OrderModel.create(Validation);
  return order;
};

const calculateRevenue = async () => {
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

const getDetails = async () => {
  const result = await OrderModel.find()
  // console.log(result, "From order service");
  return result

}

export const orderService = {
  createOrder,
  calculateRevenue,
  getDetails
}
