import express from "express";
import {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  login,
} from "../controllers/userController.js";

const router = express.Router();

router.post("/", createUser);
router.get("/", getUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post("/login", login);

export default router;
