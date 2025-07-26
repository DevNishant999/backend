import express from "express";
import {
  getAbout,
  createAbout,
  updateAbout,
  deleteAbout,
} from "../controllers/aboutController.js";

const router = express.Router();

router.get("/", getAbout);
router.post("/", createAbout);
router.put("/", updateAbout);
router.delete("/", deleteAbout);

export default router;
