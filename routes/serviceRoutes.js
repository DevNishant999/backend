import express from "express";
import {
  createService,
  getAllServices,
  getServiceBySlug,
  updateService,
  deleteService,
} from "../controllers/serviceController.js";

const router = express.Router();

// Create
router.post("/", createService);

// Get all
router.get("/", getAllServices);

// Get one by slug
router.get("/:slug", getServiceBySlug);

// Update by ID
router.put("/:id", updateService);

// Delete by ID
router.delete("/:id", deleteService);

export default router;
