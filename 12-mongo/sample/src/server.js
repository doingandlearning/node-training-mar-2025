import express from "express"
import characterRoutes from "./routes/characters.routes.js"
import apiKey from "./middlewares/apiKey.js"
import mongoose from "mongoose"

const app = express()
app.use(apiKey)
app.use("/api/v1/characters", express.json(), characterRoutes)

app.get("/", (req, res) => {
	res.json({ message: "Goodbye, world!" })
})
try {

	await mongoose.connect(process.env.MONGO_DB_URI)
	console.log("Connected to database")
} catch (error) {
	console.log("Something went wrong with database: ", error)
}
app.listen(3000, () => {
	console.log("Server is listening on port 3000")
})