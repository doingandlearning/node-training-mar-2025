export default function headerFunction(req, res, next) {
	req.body.universe = "Star Wars"
	next()
}