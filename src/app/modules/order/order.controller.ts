/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */


/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import { calculateRevenue, createOrder } from './order.service';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';

const orderCar = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await createOrder(orderData);

  res.status(200).json({
    message: 'Order created successfully',
    status: true,
    data: result,
  });
  sendResponse(res, {
    statusCode: (httpStatus.OK),
    success: true,
    message: "Total revenue is get successfully",
    data: result
  })
});

const getRevenue = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
  const totalRevenue = await calculateRevenue();

  sendResponse(res, {
    statusCode: (httpStatus.OK),
    success: true,
    message: "Total revenue is get successfully",
    data: totalRevenue
  })
});

export const orderController = { orderCar, getRevenue };
