import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  userId: { type: String, required: true },
  carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  status: {
    type: String,
    enum: ["Pending", "Paid", "Shipped", "Completed", "Cancelled"],
    default: "Pending",
  },
  transaction: {
    id: String,
    transactionStatus: String,
    bank_status: String,
    sp_code: String,
    sp_message: String,
    method: String,
    date_time: String,
  },
  totalPrice: { type: Number }
},
  {
    timestamps: true
  }
);

export const OrderModel = model<TOrder>('Order', OrderSchema);
