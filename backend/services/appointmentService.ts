import Appointment from "../models/appointmentModel";
import moment from "moment";

export const createAppointment = async (appointmentData: any) => {
  const appointment = new Appointment(appointmentData);
  return await appointment.save();
};

export const getAppointmentById = async (id: string) => {
  return await Appointment.findById(id).populate("user massageType session");
};

export const updateAppointment = async (id: string, updateData: any) => {
  return await Appointment.findByIdAndUpdate(id, updateData, { new: true });
};

export const deleteAppointment = async (id: string) => {
  return await Appointment.findByIdAndDelete(id);
};

export const getAllAppointments = async () => {
  try {
    return await Appointment.find()
      .populate("user", "name email") // Populate only the name and email fields from the user
      .populate("massageType", "name") // Populate only the name field from the massage type
      .exec();
  } catch (error) {
    console.error("Error during fetching all appointments:", error); // Log the error here
    throw new Error("Error fetching appointments"); // Rethrow to be caught in the controller
  }
};

// Search appointments by user or date
export const searchAppointments = async (query: string) => {
  const parsedQuery = moment(query, 'DD/MM/YYYY').startOf('day').toISOString();
  const endOfDay = moment(query, 'DD/MM/YYYY').endOf('day').toISOString();

  return await Appointment.find({
    $or: [
      { 'user.name': { $regex: query, $options: 'i' } }, 
      { date: { $gte: parsedQuery, $lt: endOfDay } } // Search for exact day match
    ]
  }).populate('user massageType session');
};


export const getAppointmentsByDate = async (date: string) => {
  // Parse the provided date to DD/MM/YYYY format
  const parsedDate = moment(date, "DD/MM/YYYY").startOf("day").toISOString();
  const endOfDay = moment(date, "DD/MM/YYYY").endOf("day").toISOString();

  return await Appointment.find({
    date: {
      $gte: parsedDate, // Greater than or equal to start of the day
      $lt: endOfDay, // Less than the end of the day
    },
  }).populate("user massageType session");
};
