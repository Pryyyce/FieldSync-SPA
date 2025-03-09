import { Pool } from 'pg';
import dotenv from 'dotenv';
import UserDataSource from '../entities/UserDataSource';
dotenv.config();

//tries to connect postgres through typeorm
const connectDB = async (retries = 5,delay = 5000) => {
    while(retries){
        try {
            await UserDataSource.initialize();
            console.log('Connected to the PostgreSQL database');
            return;
        } catch (error) {
            console.error('Database connection error:', error);
            retries -=1;
            console.log(`retries left: ${retries}`);
            if(!retries) {
                console.error('Failed to connect to the database after several retries');
                throw error;
            }
            console.log(`Retrying in ${delay}ms...`);
            await new Promise(res => setTimeout(res, delay));
            if (!retries) throw error;
        }
    }
    
};

export default connectDB;