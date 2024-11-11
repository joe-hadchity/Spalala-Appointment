import { Request, Response } from 'express';
import { createSession, getSessionById, updateSession, deleteSession, searchSessions, getAllSessions } from '../services/sessionService';

// Create a new session
export const createNewSession = async (req: Request, res: Response) => {
  try {
    const session = await createSession(req.body);
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ message: 'Error creating session', error });
  }
};

// Get a session by ID
export const getSession = async (req: Request, res: Response) => {
  try {
    const session = await getSessionById(req.params.id);
    res.status(200).json(session);
  } catch (error) {
    res.status(404).json({ message: 'Session not found', error });
  }
};

// Update a session by ID
export const updateSessionById = async (req: Request, res: Response) => {
  try {
    const updatedSession = await updateSession(req.params.id, req.body);
    res.status(200).json(updatedSession);
  } catch (error) {
    res.status(500).json({ message: 'Error updating session', error });
  }
};

// Delete a session by ID
export const deleteSessionById = async (req: Request, res: Response) => {
  try {
    await deleteSession(req.params.id);
    res.status(204).json({ message: 'Session deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting session', error });
  }
};

// Get all sessions
export const getAllSessionsController = async (req: Request, res: Response) => {
  try {
    const sessions = await getAllSessions();
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching sessions', error });
  }
};

// Search sessions by status or date
export const searchForSessions = async (req: Request, res: Response) => {
  try {
    const sessions = await searchSessions(req.query.q as string);
    res.status(200).json(sessions);
  } catch (error) {
    res.status(500).json({ message: 'Error searching for sessions', error });
  }
};
