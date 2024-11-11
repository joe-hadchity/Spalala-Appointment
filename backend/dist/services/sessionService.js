"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchSessions = exports.getAllSessions = exports.deleteSession = exports.updateSession = exports.getSessionById = exports.createSession = void 0;
const sessionModel_1 = __importDefault(require("../models/sessionModel"));
const createSession = async (sessionData) => {
    const session = new sessionModel_1.default(sessionData);
    return await session.save();
};
exports.createSession = createSession;
const getSessionById = async (id) => {
    return await sessionModel_1.default.findById(id).populate('appointment');
};
exports.getSessionById = getSessionById;
const updateSession = async (id, updateData) => {
    return await sessionModel_1.default.findByIdAndUpdate(id, updateData, { new: true });
};
exports.updateSession = updateSession;
const deleteSession = async (id) => {
    return await sessionModel_1.default.findByIdAndDelete(id);
};
exports.deleteSession = deleteSession;
const getAllSessions = async () => {
    return await sessionModel_1.default.find().populate('appointment');
};
exports.getAllSessions = getAllSessions;
// Search sessions by date or status
const searchSessions = async (query) => {
    return await sessionModel_1.default.find({
        $or: [
            { status: { $regex: query, $options: 'i' } },
            { startTime: { $regex: query, $options: 'i' } }
        ]
    }).populate('appointment');
};
exports.searchSessions = searchSessions;
