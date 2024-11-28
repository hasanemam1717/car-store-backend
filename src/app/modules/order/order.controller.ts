/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import { calculateRevenue, createOrder } from './order.service';

const orderCar = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await createOrder(orderData);

    res.status(200).json({
      message: 'Order created successfully',
      status: true,
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      message: error.message || 'Failed to create order',
      status: false,
    });
  }
};

const getRevenue = async (_req: Request, res: Response) => {
  try {
    const totalRevenue = await calculateRevenue();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    res.status(500).json({
      message: error.message || 'Failed to calculate revenue',
      status: false,
    });
  }
};

export const orderController = { orderCar, getRevenue };
