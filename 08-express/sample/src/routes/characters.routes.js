import { Router } from "express"
import {
	getAllCharacters,
	createNewCharacter,
	getCharacterById,
	updateCharacter,
	deleteCharacter
} from "../controllers/characters.controllers.js"
const router = Router()

// router.get("/", getAllCharacters)
// router.post("/", createNewCharacter)
// router.get("/:id", getCharacterById)
// router.patch("/:id", updateCharacter)
// router.delete("/:id", deleteCharacter)

router.route("/")
	.get(getAllCharacters)
	.post(createNewCharacter)

router.route("/:id")
	.get(getCharacterById)
	.patch(updateCharacter)
	.delete(deleteCharacter)

export default router