import jwt from 'jsonwebtoken';
import { TUser } from "../user/user.interface";
import { UserModel } from "../user/user.model";
import { ILogInUser } from "./auth.interface";
import bcrypt from 'bcrypt'
import config from '../../config';

const register = async (payload: TUser) => {
    const result = await UserModel.create(payload)
    return result
}
const login = async (payload: ILogInUser) => {
    const user = await UserModel.findOne({ email: payload?.email })
    if (!user) {
        throw new Error('User not found.')
    }
    const isBlocked = user?.isBlocked
    if (isBlocked === true) {
        throw new Error('This user is blocked')
    }

    const checkPassword = await bcrypt.compare(payload?.password, user?.password)

    if (!checkPassword) {
        throw new Error('Password does not match!')
    }
    // generate token for authorization
    const token = jwt.sign({ email: user?.email, role: user?.role }, config.JWT_ACCESS_SECRET as string, { expiresIn: "10d" })

    const verifyUser = { name: user.name, email: user?.email, role: user?.role }

    return { token, verifyUser }
}

export const authService = {
    register,
    login
}