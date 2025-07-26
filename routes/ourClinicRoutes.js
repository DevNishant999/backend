import express from "express";
import {
  createOurClinic,
  getOurClinic,
  updateOurClinic,
} from "../controllers/OurClinicController.js";

const router = express.Router();

router.post("/", createOurClinic);
router.get("/", getOurClinic);
router.put("/", updateOurClinic);

export default router;
