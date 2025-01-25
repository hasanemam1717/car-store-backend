import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';

const OrderSchema = new Schema<TOrder>({
  email: { type: String, required: true },
  carId: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  totalPrice: { type: Number, required: true }
},
  {
    timestamps: true
  }
);

export const OrderModel = model<TOrder>('Order', OrderSchema);
