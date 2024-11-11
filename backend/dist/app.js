"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const appointmentRoutes_1 = __importDefault(require("./routes/appointmentRoutes"));
const massageTypeRoutes_1 = __importDefault(require("./routes/massageTypeRoutes"));
const sessionRoutes_1 = __importDefault(require("./routes/sessionRoutes"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
const app = (0, express_1.default)();
// Middleware for parsing JSON requests
app.use(express_1.default.json());
// Registering routes
app.use('/api/users', userRoutes_1.default);
app.use('/api/appointments', appointmentRoutes_1.default);
app.use('/api/massages', massageTypeRoutes_1.default);
app.use('/api/sessions', sessionRoutes_1.default);
// Middleware for handling 404 errors
app.use(errorMiddleware_1.notFound);
// Global error handler
app.use(errorMiddleware_1.errorHandler);
exports.default = app;
