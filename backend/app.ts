import express from 'express';
import userRoutes from './routes/userRoutes';
import appointmentRoutes from './routes/appointmentRoutes';
import massageTypeRoutes from './routes/massageTypeRoutes';
import sessionRoutes from './routes/sessionRoutes';
import authRoutes from './routes/authRoutes';
import { notFound, errorHandler } from './middlewares/errorMiddleware';

import cors from 'cors';

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,  // Enable cookies and other credentials
  }));
// Registering routes
app.use('/api/users', userRoutes);
app.use('/api/appointments', appointmentRoutes);
app.use('/api/massages', massageTypeRoutes);
app.use('/api/sessions', sessionRoutes);
app.use('/api/auth', authRoutes);
// Middleware for handling 404 errors
app.use(notFound);

app.options('*', cors());  // Handle preflight requests
// Global error handler
app.use(errorHandler);

export default app;
