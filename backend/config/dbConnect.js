import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

const dbConnect = async () => {
    try {
        const client = await pool.connect();
        console.log('Database connected');
        console.log(`DB Host: ${client.host}`);
        client.release();
    } catch (error) {
        console.error('Database connection failed', error.message);
        process.exit(1);
    }
};

export default dbConnect;