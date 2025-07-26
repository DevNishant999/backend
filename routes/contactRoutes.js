// routes/contactRoutes.js
import express from "express";
import {
  getContact,
  createContact,
  updateContact,
} from "../controllers/contactController.js";

const router = express.Router();

router.get("/", getContact);
router.post("/", createContact);
router.put("/", updateContact);

export default router;
