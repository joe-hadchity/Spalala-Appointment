import { Request, Response } from 'express';
import { createAppointment, getAppointmentById, updateAppointment, deleteAppointment, searchAppointments, getAllAppointments, getAppointmentsByDate  } from '../services/appointmentService';

// Create a new appointment
export const bookAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await createAppointment(req.body);
    res.status(201).json(appointment);
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error });
  }
};

// Get an appointment by ID
export const getAppointment = async (req: Request, res: Response) => {
  try {
    const appointment = await getAppointmentById(req.params.id);
    res.status(200).json(appointment);
  } catch (error) {
    res.status(404).json({ message: 'Appointment not found', error });
  }
};

// Update an appointment by ID
export const updateAppointmentById = async (req: Request, res: Response) => {
  try {
    const updatedAppointment = await updateAppointment(req.params.id, req.body);
    res.status(200).json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: 'Error updating appointment', error });
  }
};

// Delete an appointment by ID
export const deleteAppointmentById = async (req: Request, res: Response) => {
  try {
    await deleteAppointment(req.params.id);
    res.status(204).json({ message: 'Appointment deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting appointment', error });
  }
};

// Get all appointments
export const getAllAppointmentsController = async (req: Request, res: Response) => {
  try {
    const appointments = await getAllAppointments();
    console.log(appointments); // Log the appointments to check if `user` and `massageType` are populated
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching appointments', error });
  }
};

export const getAppointmentsByDateController = async (req: Request, res: Response) => {
  const { date } = req.params;

  if (!date) {
    return res.status(400).json({ error: 'Date parameter is required' });
  }

  try {
    const appointments = await getAppointmentsByDate(date);

    if (!appointments || appointments.length === 0) {
      return res.status(404).json({ message: 'No appointments found for this date' });
    }

    return res.status(200).json(appointments);
  } catch (error) {
    console.error('Error fetching appointments by date:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};


// Fetch appointments by user name or date (already defined)
export const searchForAppointments = async (req: Request, res: Response) => {
  try {
    const query = req.query.q as string;
    
    if (!query) {
      return res.status(400).json({ message: "Search query is required" });
    }

    const appointments = await searchAppointments(query);
    res.status(200).json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error searching for appointments", error });
  }
};