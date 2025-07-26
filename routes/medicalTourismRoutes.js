import express from "express";
import {
  getMedicalTourism,
  createMedicalTourism,
  updateMedicalTourism,
} from "../controllers/medicalTourismController.js";

const router = express.Router();

router.get("/", getMedicalTourism);
router.post("/", createMedicalTourism);
router.put("/", updateMedicalTourism);

export default router;
