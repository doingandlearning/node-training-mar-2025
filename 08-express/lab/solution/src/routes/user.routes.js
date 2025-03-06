import express, { Router } from "express";
import users from "../controllers/user.controller.js";
import apiKeyAuth from "../middleware/apiKeyAuth.js";
import {
  handleValidationErrors,
  validateUserObject,
} from "../middleware/validationErrors.js";
const router = Router();

router.use(express.json());

router
  .route("/")
  .get(users.getAllUsers)
  .post(
    validateUserObject,
    handleValidationErrors,
    users.createNewUser
  ); // !

router
  .route("/:id")
  .get(users.getUserById)
  .patch(users.updateUserById)
  .delete(users.deleteUserById);

export default router;
