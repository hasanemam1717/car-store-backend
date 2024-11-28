import { Request, Response } from "express";
import { CarServices } from "./car.service";

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
        console.log(error);
        res.status(500).json({ status: false, massage: 'something went wrong', error: error });
    }
}

export const CarControllers = {
    createCar,
}