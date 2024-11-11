"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchAppointments = exports.getAllAppointments = exports.deleteAppointment = exports.updateAppointment = exports.getAppointmentById = exports.createAppointment = void 0;
const appointmentModel_1 = __importDefault(require("../models/appointmentModel"));
const createAppointment = async (appointmentData) => {
    const appointment = new appointmentModel_1.default(appointmentData);
    return await appointment.save();
};
exports.createAppointment = createAppointment;
const getAppointmentById = async (id) => {
    return await appointmentModel_1.default.findById(id).populate('user massageType session');
};
exports.getAppointmentById = getAppointmentById;
const updateAppointment = async (id, updateData) => {
    return await appointmentModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
};
exports.updateAppointment = updateAppointment;
const deleteAppointment = async (id) => {
    return await appointmentModel_1.default.findByIdAndDelete(id);
};
exports.deleteAppointment = deleteAppointment;
const getAllAppointments = async () => {
    return await appointmentModel_1.default.find().populate('user massageType session');
};
exports.getAllAppointments = getAllAppointments;
// Search appointments by user or date
const searchAppointments = async (query) => {
    return await appointmentModel_1.default.find({
        $or: [
            { 'user.name': { $regex: query, $options: 'i' } },
            { date: { $regex: query, $options: 'i' } }
        ]
    }).populate('user massageType session');
};
exports.searchAppointments = searchAppointments;
