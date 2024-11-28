import { Schema } from 'mongoose';

export interface TOrder {
  email: string;
  car: Schema.Types.ObjectId;
  quantity: number;
  totalPrice: number;
  createdAt: Date;
  updatedAt: Date;
}
