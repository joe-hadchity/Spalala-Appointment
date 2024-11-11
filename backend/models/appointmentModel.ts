import { Schema, model, Document } from 'mongoose';

interface IAppointment extends Document {
  user: Schema.Types.ObjectId;
  massageType: Schema.Types.ObjectId;
  date: Date;
  status: 'scheduled' | 'completed' | 'canceled';
  session: Schema.Types.ObjectId;
}

const appointmentSchema = new Schema<IAppointment>({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true }, // Make sure ref matches the model name exactly
  massageType: { type: Schema.Types.ObjectId, ref: 'MassageType', required: true },
  session: { type: Schema.Types.ObjectId, ref: 'Session' }, // If this is optional, you can skip required: true
  date: { type: Date, required: true },
  status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
}, { timestamps: true });


const Appointment = model<IAppointment>('Appointment', appointmentSchema);
export default Appointment;
