"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'staff', 'customer'], default: 'customer' },
    appointments: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Appointment' }],
}, { timestamps: true });
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
