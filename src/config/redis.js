import { createClient } from 'redis';

// Cloud par 'REDIS_URL' uthayega, local par 'localhost'
const redisClient = createClient({
    url: process.env.REDIS_URL || 'redis://localhost:6379'
});

redisClient.on('error', (err) => console.error('Redis Error:', err));

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('✅ Redis Connected');
    } catch (err) {
        console.error('❌ Redis Connection Failed:', err);
    }
};

export { redisClient, connectRedis };