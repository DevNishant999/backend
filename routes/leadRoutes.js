// routes/leadRoutes.js
import express from "express";
import { submitLeadForm } from "../controllers/leadController.js";
import Lead from "../models/Lead.js"; 

const router = express.Router();

router.post("/submit", submitLeadForm);

router.get("/all", async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
});

export default router;
