import mongoose from 'mongoose';

type ConnectionURI = string;

export const dbConnection = async (connectionString: ConnectionURI): Promise<void> => {
  try {
    mongoose.set('strictQuery', true);
    await mongoose.connect(connectionString);
    console.log('Database is connected');
  } catch (err) {
    console.error('Connection failed:', err);
    throw err; 
  }
};
