import CharacterModel from "../models/characters.models.js"
const characters = []
let currentId = 1

export async function getAllCharacters(req, res) {
	try {
		const allCharacters = await CharacterModel.find()
		res.send(allCharacters)
	} catch (error) {
		res.status(400).json({ message: "Something went wrong" })
		console.log(error)
	}
}

export async function createNewCharacter(req, res, next) {
	try {
		const character = req.body
		if (!character.name) {
			res.status(400).json({ message: "You need to provide a name" })
			return
		}
		const newCharacter = new CharacterModel(character)
		await newCharacter.save()
		res.json(newCharacter)

	} catch (error) {
		if (error.message.startsWith("E11000")) {
			res
				.status(400)
				.send({ message: "You already have someone with that name." });
			return;
		}
		res.status(400).json({ message: "Something went wrong" })
		console.log(error)
	}
}

export async function getCharacterById(req, res) { // /:id
	try {
		const character = await CharacterModel.findById(req.params.id)
		if (!character) {
			res.status(404).json({ message: "Character not found" })
		} else {
			res.json(character)
		}
	} catch (error) {
		res.status(400).json({ message: "Something went wrong" })
		console.log(error)
	}
}

export async function updateCharacter(req, res) {
	try {
		const character = await CharacterModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		)
		if (!character) {
			res.status(404).json({ message: "Character not found" })
		} else {
			res.json(character)
		}
	} catch (error) {
		res.status(400).json({ message: "Something went wrong" })
		console.log(error)
	}
}
export async function deleteCharacter(req, res) {
	try {
		const character = await CharacterModel.findByIdAndDelete(req.params.id)
		if (!character) {
			res.status(404).json({ message: "Character not found" })
		} else {
			res.status(204).send()
		}
	} catch (error) {
		res.status(400).json({ message: "Something went wrong" })
		console.log(error)
	}
}