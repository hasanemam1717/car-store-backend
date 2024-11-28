import { TCar } from "./car.interface";
import { CarModel } from "./car.modle";

const createCarInDB = async (car: TCar) => {
    const result = await CarModel.create(car)
    return result
}


export const CarServices = {
    createCarInDB
}