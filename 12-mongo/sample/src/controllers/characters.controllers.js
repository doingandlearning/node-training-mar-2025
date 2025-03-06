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

export function getCharacterById(req, res) { // /:id
	const character = characters.find(char => char.id === parseInt(req.params.id))

	if (!character) {
		res.status(404).json({ message: "Character not found" })
		return
	}
	res.json(character)
}

export function updateCharacter(req, res) {
	const characterIndex = characters.findIndex(c => c.id === parseInt(req.params.id))

	if (characterIndex === -1) {
		res.status(404).json({ message: "Character not found" })
	} else {
		characters[characterIndex] = { ...characters[characterIndex], ...req.body }
		res.send(characters[characterIndex])
	}
}
export function deleteCharacter(req, res) {
	const characterIndex = characters.findIndex(c => c.id === parseInt(req.params.id))

	if (characterIndex === -1) {
		res.status(404).json({ message: "Character not found" })
	} else {
		characters.splice(characterIndex, 1)
		res.status(204).send()
	}
}