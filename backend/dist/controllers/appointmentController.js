"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForAppointments = exports.getAllAppointmentsController = exports.deleteAppointmentById = exports.updateAppointmentById = exports.getAppointment = exports.bookAppointment = void 0;
const appointmentService_1 = require("../services/appointmentService");
// Create a new appointment
const bookAppointment = async (req, res) => {
    try {
        const appointment = await (0, appointmentService_1.createAppointment)(req.body);
        res.status(201).json(appointment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error booking appointment', error });
    }
};
exports.bookAppointment = bookAppointment;
// Get an appointment by ID
const getAppointment = async (req, res) => {
    try {
        const appointment = await (0, appointmentService_1.getAppointmentById)(req.params.id);
        res.status(200).json(appointment);
    }
    catch (error) {
        res.status(404).json({ message: 'Appointment not found', error });
    }
};
exports.getAppointment = getAppointment;
// Update an appointment by ID
const updateAppointmentById = async (req, res) => {
    try {
        const updatedAppointment = await (0, appointmentService_1.updateAppointment)(req.params.id, req.body);
        res.status(200).json(updatedAppointment);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating appointment', error });
    }
};
exports.updateAppointmentById = updateAppointmentById;
// Delete an appointment by ID
const deleteAppointmentById = async (req, res) => {
    try {
        await (0, appointmentService_1.deleteAppointment)(req.params.id);
        res.status(204).json({ message: 'Appointment deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting appointment', error });
    }
};
exports.deleteAppointmentById = deleteAppointmentById;
// Get all appointments
const getAllAppointmentsController = async (req, res) => {
    try {
        const appointments = await (0, appointmentService_1.getAllAppointments)();
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching appointments', error });
    }
};
exports.getAllAppointmentsController = getAllAppointmentsController;
// Search appointments by user or date
const searchForAppointments = async (req, res) => {
    try {
        const appointments = await (0, appointmentService_1.searchAppointments)(req.query.q);
        res.status(200).json(appointments);
    }
    catch (error) {
        res.status(500).json({ message: 'Error searching for appointments', error });
    }
};
exports.searchForAppointments = searchForAppointments;
