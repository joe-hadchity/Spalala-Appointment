import dotenv from 'dotenv';
import connectDB from './config/db';
import app from './app';
import cors from 'cors'
// Load environment variables from .env file
dotenv.config();


// Connect to MongoDB
connectDB();
app.options('*', cors()); 
// Set the server to listen on the defined port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
