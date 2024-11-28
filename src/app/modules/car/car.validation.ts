import { z } from 'zod';

// Define the Zod schema
export const carValidationSchema = z.object({
  brand: z.string().nonempty('Brand is required'),
  model: z.string().nonempty('Model is required'),
  year: z
    .number()
    .int('Year must be an integer')
    .min(1886, 'Year must be greater than 1885') // first car invented in 1886
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  price: z
    .number()
    .positive('Price must be a positive number')
    .nonnegative('Price cannot be negative'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible']),
  description: z.string().nonempty('Description is required'),
  quantity: z
    .number()
    .int('Quantity must be an integer')
    .min(0, 'Quantity cannot be negative'),
  inStock: z.boolean(),
});
