import { Schema } from 'mongoose';

export interface TOrder {
  userId: string;
  carId: Schema.Types.ObjectId;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
  quantity: number;
  price: number;
  totalPrice?: number;
  createdAt: Date;
  updatedAt: Date;
}
