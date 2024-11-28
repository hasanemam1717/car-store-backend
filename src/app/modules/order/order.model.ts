import { model, Schema } from 'mongoose';
import { TOrder } from './order.interface';



const OrderSchema = new Schema<TOrder>({
    email: { type: String, required: true },
    car: { type: Schema.Types.ObjectId, ref: 'Car', required: true },
    quantity: { type: Number, required: true },
    totalPrice: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

export const OrderModel = model<TOrder>('Order', OrderSchema);