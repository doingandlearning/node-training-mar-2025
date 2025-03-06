const characters = []
let currentId = 1

export function getAllCharacters(req, res) {
	res.json(characters)
}

export function createNewCharacter(req, res, next) {
	const character = req.body
	console.log(character)
	character.id = currentId++
	characters.push(character)
	res.json(character)
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