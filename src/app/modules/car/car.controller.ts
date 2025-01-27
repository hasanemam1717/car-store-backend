/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { CarServices } from './car.service';
import { carValidationSchema } from './car.validation';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';

// 1. Create a Car
const createCar = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const car = req.body;
  // zod validation
  const validation = carValidationSchema.parse(car);
  const result = await CarServices.createCarInDB(validation);

  sendResponse(res, {
    statusCode: (httpStatus.OK),
    success: true,
    message: "Car is created successfully",
    data: result
  })
});
// 2. Get All Cars
const getCars = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const result = await CarServices.getAllCarsFromDb(req.query);
  console.log(req.cookies);
  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: "Car are retrieved successfully",
    data: result
  })
});
// 3. Get a Specific Car
const getSpecificCar = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await CarServices.getSpecificCar(id);
  sendResponse(res, {
    statusCode: (httpStatus.OK),
    status: true,
    message: 'Car is retrieved successfully',
    data: result
  })
});
// 4. Update a Car
const updateCar = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const data = req.body;
  const result = await CarServices.updateCar(id, data);
  sendResponse(res, {
    status: true,
    statusCode: (httpStatus.OK),
    message: 'Car is updated successfully.',
    data: result,
  });
});
// 5. Delete a Car
const deleteCar = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const id = req.params.id;
  const result = await CarServices.deleteCar(id);
  sendResponse(res, { statusCode: (httpStatus.OK), status: true, message: 'Car is deleted successfully!', data: result })

});

export const CarControllers = {
  createCar,
  getCars,
  getSpecificCar,
  updateCar,
  deleteCar,
};
