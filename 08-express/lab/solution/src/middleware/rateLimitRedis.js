import Redis from 'ioredis';

const redis = new Redis(); // Default connection to Redis server (localhost:6379)

const LIMIT = 3; // Max requests per time window
const WINDOW_MS = 60 * 1000; // 1-minute window

async function rateLimitingMiddleware(req, res, next) {
	const clientIP = req.ip; // Identify client by IP
	const redisKey = `rate-limit:${clientIP}`; // Key to store request count

	const currentTime = Date.now();
	const windowEnd = currentTime + WINDOW_MS;

	try {
		// Increment request count and set expiration in a single atomic operation
		const requestCount = await redis.incr(redisKey);

		if (requestCount === 1) {
			// Set expiration time for the key only on first request in the window
			await redis.pexpire(redisKey, WINDOW_MS);
		}

		// Check if the limit is exceeded
		if (requestCount > LIMIT) {
			res.set('Retry-After', Math.ceil(WINDOW_MS / 1000).toString());
			res
				.status(429)
				.json({ message: 'Too many requests. Please try again later.' });
			return;
		}

		// Add rate-limit headers
		res.set('X-RateLimit-Limit', LIMIT.toString());
		res.set('X-RateLimit-Remaining', (LIMIT - requestCount).toString());
		res.set('X-RateLimit-Reset', windowEnd.toString());

		next();
	} catch (error) {
		console.error('Redis error:', error);
		res.status(500).json({ message: 'Internal server error' });
	}
}

export default rateLimitingMiddleware;
