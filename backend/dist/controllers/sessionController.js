"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchForSessions = exports.getAllSessionsController = exports.deleteSessionById = exports.updateSessionById = exports.getSession = exports.createNewSession = void 0;
const sessionService_1 = require("../services/sessionService");
// Create a new session
const createNewSession = async (req, res) => {
    try {
        const session = await (0, sessionService_1.createSession)(req.body);
        res.status(201).json(session);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating session', error });
    }
};
exports.createNewSession = createNewSession;
// Get a session by ID
const getSession = async (req, res) => {
    try {
        const session = await (0, sessionService_1.getSessionById)(req.params.id);
        res.status(200).json(session);
    }
    catch (error) {
        res.status(404).json({ message: 'Session not found', error });
    }
};
exports.getSession = getSession;
// Update a session by ID
const updateSessionById = async (req, res) => {
    try {
        const updatedSession = await (0, sessionService_1.updateSession)(req.params.id, req.body);
        res.status(200).json(updatedSession);
    }
    catch (error) {
        res.status(500).json({ message: 'Error updating session', error });
    }
};
exports.updateSessionById = updateSessionById;
// Delete a session by ID
const deleteSessionById = async (req, res) => {
    try {
        await (0, sessionService_1.deleteSession)(req.params.id);
        res.status(204).json({ message: 'Session deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ message: 'Error deleting session', error });
    }
};
exports.deleteSessionById = deleteSessionById;
// Get all sessions
const getAllSessionsController = async (req, res) => {
    try {
        const sessions = await (0, sessionService_1.getAllSessions)();
        res.status(200).json(sessions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching sessions', error });
    }
};
exports.getAllSessionsController = getAllSessionsController;
// Search sessions by status or date
const searchForSessions = async (req, res) => {
    try {
        const sessions = await (0, sessionService_1.searchSessions)(req.query.q);
        res.status(200).json(sessions);
    }
    catch (error) {
        res.status(500).json({ message: 'Error searching for sessions', error });
    }
};
exports.searchForSessions = searchForSessions;
