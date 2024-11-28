import { z } from 'zod';

const orderValidation = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
    car: z.string().regex(/^[a-f\d]{24}$/i, { message: 'Invalid car ObjectId' }),
    quantity: z
        .number()
        .int()
        .positive({ message: 'Quantity must be a positive integer' }),
    totalPrice: z
        .number()
        .nonnegative({ message: 'Total price must be 0 or greater' }),
    createdAt: z.date().default(() => new Date()),
    updatedAt: z.date().default(() => new Date()),
});

export default orderValidation;