import { Router } from 'express';
import { bookAppointment, getAppointment, updateAppointmentById, deleteAppointmentById, getAllAppointmentsController, searchForAppointments, getAppointmentsByDateController } from '../controllers/appointmentController';

const router = Router();

router.post('/book', bookAppointment);
router.get('/:id', getAppointment);
router.put('/:id', updateAppointmentById);
router.delete('/:id', deleteAppointmentById);
router.get('/', getAllAppointmentsController);
router.get('/search', searchForAppointments); // Search by name or date
router.get('/date/:date', getAppointmentsByDateController); // Get appointments by specific date

export default router;
