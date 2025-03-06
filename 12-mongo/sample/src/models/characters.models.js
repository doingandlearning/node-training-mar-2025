import mongoose from "mongoose"

// schema
const CharacterSchema = new mongoose.Schema({
	name: { type: String, required: true, unique: true },
	height: Number,
	hair_color: String,
	gender: { type: String, enum: ["male", "female", "non-binary", "unknown"] }
})

// model -> access the data
const CharacterModel = mongoose.model("Character", CharacterSchema)

export default CharacterModel