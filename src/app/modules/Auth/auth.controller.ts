import { Request, Response } from "express";
import { authService } from "./auth.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

const register = catchAsync(async (req: Request, res: Response) => {
    const result = await authService.register(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        status: true,
        message: "User registered successfully",
        data: result
    })
})
const login = catchAsync(async (req: Request, res: Response) => {
    const result = await authService.login(req.body);

    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        status: true,
        message: "User login successfully",
        token: result?.token,
        data: result.verifyUser
    })
})

export const AuthController = {
    register,
    login
}