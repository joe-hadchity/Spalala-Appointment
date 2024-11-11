"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const sessionSchema = new mongoose_1.Schema({
    appointment: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Appointment', required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date },
    status: { type: String, enum: ['ongoing', 'completed', 'canceled'], default: 'ongoing' },
}, { timestamps: true });
const Session = (0, mongoose_1.model)('Session', sessionSchema);
exports.default = Session;
