// routes/faqRoutes.js
import express from "express";
import {
  getFaqs,
  createFaq,
  updateFaq,
  deleteFaq,
} from "../controllers/faqController.js";

const router = express.Router();

router.get("/", getFaqs);
router.post("/", createFaq);
router.put("/:id", updateFaq);
router.delete("/:id", deleteFaq);

export default router;
