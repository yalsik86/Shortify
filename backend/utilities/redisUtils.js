import redisClient from '../config/redisClient.js';

export const redisCheck = async (key) => {
    return new Promise((resolve, reject) => {
        redisClient.get(key, (err, value) => {
            if (err) {
                reject(err);
            } else {
                resolve(value);
            }
        });
    });
};

export const redisSetex = async (key, ttl, value) => {
    return new Promise((resolve, reject) => {
        redisClient.setex(key, ttl, value, (err) => {
            if (err) {
                reject(err);
            } else {
                resolve();
            }
        });
    });
};