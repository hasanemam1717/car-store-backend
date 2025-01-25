/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */


/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { orderService } from './order.service';

const orderCar = catchAsync(async (req: Request, res: Response) => {
  const orderData = req.body;
  const result = await orderService.createOrder(orderData)
  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: "Your order created successfully!",
    data: result
  })
});

const getRevenue = catchAsync(async (_req: Request, res: Response, next: NextFunction) => {
  const totalRevenue = await orderService.calculateRevenue()

  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: "Total revenue is get successfully",
    data: totalRevenue
  })
});

export const orderController = { orderCar, getRevenue };
