import { Schema } from 'mongoose';

export interface TOrder {
  email: string;
  carId: Schema.Types.ObjectId;
  quantity: number;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
