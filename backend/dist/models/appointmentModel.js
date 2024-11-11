"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const appointmentSchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    massageType: { type: mongoose_1.Schema.Types.ObjectId, ref: 'MassageType', required: true },
    date: { type: Date, required: true },
    status: { type: String, enum: ['scheduled', 'completed', 'canceled'], default: 'scheduled' },
    session: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Session' },
}, { timestamps: true });
const Appointment = (0, mongoose_1.model)('Appointment', appointmentSchema);
exports.default = Appointment;
