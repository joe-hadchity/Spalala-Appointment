import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connecting to MongoDB
    const conn = await mongoose.connect(process.env.MONGO_URI || '');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    // Type narrowing for error handling
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred while connecting to MongoDB');
    }
    process.exit(1); // Exit the process with failure
  }
};

export default connectDB;
