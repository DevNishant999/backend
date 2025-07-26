// routes/resultRoutes.js
import express from "express";
import {
  getResults,
  createResult,
  updateResult,
  deleteResult,
} from "../controllers/resultController.js";

const router = express.Router();

router.get("/", getResults);
router.post("/", createResult);
router.put("/:id", updateResult);
router.delete("/:id", deleteResult);

export default router;
