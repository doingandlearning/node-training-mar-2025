import { Router } from "express"
import {
	getAllCharacters,
	createNewCharacter,
	getCharacterById,
	updateCharacter,
	deleteCharacter
} from "../controllers/characters.controllers.js"
import apiKey from "../middlewares/apiKey.js"
import headerFunction from "../middlewares/resHeader.js"
const router = Router()

// router.get("/", getAllCharacters)
// router.post("/", createNewCharacter)
// router.get("/:id", getCharacterById)
// router.patch("/:id", updateCharacter)
// router.delete("/:id", deleteCharacter)

// router.use(apiKey)

router.route("/")
	.get(getAllCharacters)
	.post(apiKey, headerFunction, createNewCharacter)

router.route("/:id")
	.get(getCharacterById)
	.patch(apiKey, updateCharacter)
	.delete(apiKey, deleteCharacter)

export default router