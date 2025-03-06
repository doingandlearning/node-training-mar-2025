export default function apiKey(req, res, next) {
	if (!req.headers["x-api-key"]
		|| req.headers["x-api-key"] !== process.env.API_KEY
	) {
		res.status(403).json({ message: "Unauthorized" })
		return
	}
	next()
}