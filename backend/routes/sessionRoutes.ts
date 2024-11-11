import { Router } from 'express';
import { createNewSession, getSession, updateSessionById, deleteSessionById, getAllSessionsController, searchForSessions } from '../controllers/sessionController';

const router = Router();

router.post('/', createNewSession);
router.get('/:id', getSession);
router.put('/:id', updateSessionById);
router.delete('/:id', deleteSessionById);
router.get('/', getAllSessionsController);
router.get('/search', searchForSessions);

export default router;
