import { z } from 'zod';

const orderValidation = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  carId: z.string().regex(/^[a-f\d]{24}$/i, { message: 'Invalid car ObjectId' }),
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a + integer' }),
  price: z
    .number()
    .nonnegative({ message: 'Price must be 0 or greater' }),
  totalPrice: z
    .number()
    .nonnegative({ message: 'Total price must be 0 or greater' })
});

export default orderValidation;
