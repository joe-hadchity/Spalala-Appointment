import { Schema, model, Document } from 'mongoose';

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: 'admin' | 'staff' | 'customer';
  appointments: Schema.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'staff', 'customer'], default: 'customer' },
  appointments: [{ type: Schema.Types.ObjectId, ref: 'Appointment' }],
}, { timestamps: true });

const User = model<IUser>('User', userSchema);
export default User;
