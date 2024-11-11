"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appointmentController_1 = require("../controllers/appointmentController");
const router = (0, express_1.Router)();
router.post('/book', appointmentController_1.bookAppointment);
router.get('/:id', appointmentController_1.getAppointment);
router.put('/:id', appointmentController_1.updateAppointmentById);
router.delete('/:id', appointmentController_1.deleteAppointmentById);
router.get('/', appointmentController_1.getAllAppointmentsController);
router.get('/search', appointmentController_1.searchForAppointments);
exports.default = router;
