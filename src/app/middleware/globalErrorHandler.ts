/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import config from "../config";



// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
const globalErrorHandler: ErrorRequestHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 500;
    let message = 'Global Error Handler Response Korse Boss'
    return res.status(statusCode).json({
        success: false,
        message,
        stack: config.NODE_ENV === 'devlopment' ? err?.stack : null
    })
}

export default globalErrorHandler