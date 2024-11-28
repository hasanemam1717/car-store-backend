import { TCar } from "./car.interface";
import { CarModel } from "./car.modle";


// 1. Create a Car
const createCarInDB = async (car: TCar) => {
    const result = await CarModel.create(car)
    return result
}

// 2. Get All Cars
const getAllCarsFromDb = async () => {
    const result = await CarModel.find()
    return result
}
// 3. Get a Specific Car
const getSpecificCar = async (id: string) => {
    const result = await CarModel.findById(id)
    return result
}


export const CarServices = {
    createCarInDB,
    getAllCarsFromDb,
    getSpecificCar,


}