/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import { orderService } from './order.service';

const orderCar = catchAsync(async (req: Request, res: Response) => {
  const user = req?.user
  // console.log(user);
  const orderData = req.body;
  const result = await orderService.createOrder(user, orderData, req.ip!)
  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: "Your order created successfully!",
    data: result
  })
});
// verify order
const verifyPayment = catchAsync(async (req, res) => {
  const order = await orderService.verifyPayment(req.query.order_id as string);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Order verified successfully",
    data: order,
  });
});
// get order 
const getOrders = catchAsync(async (req, res) => {
  const order = await orderService.getOrders();

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    message: "Order retrieved successfully",
    data: order,
  });
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
const getDetails = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  // const is
  const details = await orderService.getDetails()

  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: "Order details is get successfully",
    data: details
  })
});

export const orderController = { orderCar, getRevenue, getDetails, verifyPayment, getOrders };
