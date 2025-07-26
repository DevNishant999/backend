// routes/costRoutes.js
import express from "express";
import {
  createCost,
  getAllCosts,
  getCostBySlug,
  updateCost,
  deleteCost,
} from "../controllers/costController.js";

const router = express.Router();

router.post("/", createCost);
router.get("/", getAllCosts);
router.get("/:slug", getCostBySlug);
router.put("/:id", updateCost);
router.delete("/:id", deleteCost);

export default router;
