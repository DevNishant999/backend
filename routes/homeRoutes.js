// routes/homeRoutes.js
import express from "express";
import {
  getHome,
  createHome,
  updateHome,
  deleteHome,
} from "../controllers/homeController.js";

const router = express.Router();

router.get("/", getHome);
router.post("/", createHome); // Optional
router.put("/", updateHome);
router.delete("/", deleteHome);

export default router;
