import express from "express"

const app = express()

app.get("/", (req, res) => {
	res.json({ message: "Goodbye, world!" })
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})

