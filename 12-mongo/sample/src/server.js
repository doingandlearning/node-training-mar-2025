import express from "express"
import characterRoutes from "./routes/characters.routes.js"
import apiKey from "./middlewares/apiKey.js"

const app = express()
app.use(apiKey)
app.use("/api/v1/characters", express.json(), characterRoutes)

app.get("/", (req, res) => {
	res.json({ message: "Goodbye, world!" })
})

app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})