import { Schema, model, Document } from 'mongoose';

interface IMassageType extends Document {
  name: string;
  description: string;
  duration: number;  // in minutes
  price: number;
}

const massageTypeSchema = new Schema<IMassageType>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  price: { type: Number, required: true },
}, { timestamps: true });

const MassageType = model<IMassageType>('MassageType', massageTypeSchema);
export default MassageType;
