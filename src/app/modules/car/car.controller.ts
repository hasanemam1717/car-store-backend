import { Request, Response } from "express";
import { CarServices } from "./car.service";


// 1. Create a Car
const createCar = async (req: Request, res: Response) => {
    try {
        const car = req.body;
        const result = await CarServices.createCarInDB(car)

        res.status(200).json({
            success: true,
            massage: 'Car created successfully.',
            data: result
        })
    }
    catch (error) {
        // console.log(error);
        res.status(500).json({ status: false, massage: 'something went wrong', error: error });
    }
}
// 2. Get All Cars
const getCars = async (req: Request, res: Response) => {
    try {
        const result = await CarServices.getAllCarsFromDb()
        res.status(200).json({
            success: true,
            massage: 'All car retrieved successfully.',
            data: result
        })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ status: false, massage: 'something went wrong', error: error });
    }

}

export const CarControllers = {
    createCar,
    getCars,
}