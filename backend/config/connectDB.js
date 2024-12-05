import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    logging: false, // Set to true for detailed SQL logs
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connected');
        console.log(`DB Host: ${sequelize.getDialect()} at: \n${process.env.DATABASE_URL}`);
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};

export { sequelize };
export default connectDB;