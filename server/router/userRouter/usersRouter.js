import express from "express";
import { UserRegistration } from "../../controller/userController/usersController.js";

const router = express.Router();

router.post("/regUser", UserRegistration);

export default router;
