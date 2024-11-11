import { Schema, model, Document } from 'mongoose';

interface ISession extends Document {
  appointment: Schema.Types.ObjectId;
  startTime: Date;
  endTime: Date;
  status: 'ongoing' | 'completed' | 'canceled';
}

const sessionSchema = new Schema<ISession>({
  appointment: { type: Schema.Types.ObjectId, ref: 'Appointment', required: true },
  startTime: { type: Date, required: true },
  endTime: { type: Date },
  status: { type: String, enum: ['ongoing', 'completed', 'canceled'], default: 'ongoing' },
}, { timestamps: true });

const Session = model<ISession>('Session', sessionSchema);
export default Session;
