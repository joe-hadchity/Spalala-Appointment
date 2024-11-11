"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const massageTypeSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    price: { type: Number, required: true },
}, { timestamps: true });
const MassageType = (0, mongoose_1.model)('MassageType', massageTypeSchema);
exports.default = MassageType;
