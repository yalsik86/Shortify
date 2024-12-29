import { createClient } from 'redis';
import dotenv from 'dotenv';

dotenv.config();

const redisClient = createClient({
    url: `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${process.env.REDIS_PORT || 6379}`,
});

const connectRedis = async () => {
    try {
        redisClient.on('connect', () => {
            console.log('Redis connected');
        });

        redisClient.on('error', (err) => {
            console.error('Redis error:', err);
        });

        await redisClient.connect();
        console.log('Redis connected successfully');

        // Set max memory policy
        await redisClient.configSet('maxmemory', '1mb'); // Set max memory for cache
        await redisClient.configSet('maxmemory-policy', 'allkeys-lru'); // Set LRU eviction policy
    } catch (error) {
        console.error('Redis connection failed:', error.message);
        process.exit(1);
    }
};

export { redisClient };
export default connectRedis;