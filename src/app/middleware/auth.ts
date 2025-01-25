import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';

import catchAsync from '../utils/catchAsync';
import { TUserRole } from '../modules/user/user.interface';
import { UserModel } from '../modules/user/user.model';
import config from '../config';

const auth = (...requiredRoles: TUserRole[]) => {
    return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
        const token = req.headers.authorization;
        // checking if the token is missing
        if (!token) {
            throw new Error('You are not authorized!');
        }

        // checking if the given token is valid
        const decoded = jwt.verify(
            token,
            config.JWT_ACCESS_SECRET as string,
        ) as JwtPayload;


        const { role, email } = decoded;

        // checking if the user is exist
        const user = await UserModel.findOne({ email });

        if (!user) {
            throw new Error('This user is not found !')
        }

        // checking if the user is blocked
        const userStatus = user?.isBlocked

        if (userStatus === true) {
            throw new Error('This user is blocked ! !')
        }

        if (requiredRoles && !requiredRoles.includes(role)) {
            throw new Error(
                'You are not authorized',
            );
        }

        req.user = decoded as JwtPayload;
        next();
    });
};

export default auth;