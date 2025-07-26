import express from "express";
import {
  createCity,
  getAllCities,
  getCityBySlug,
  updateCity,
  deleteCity,
} from "../controllers/cityController.js";

const router = express.Router();

// Create
router.post("/", createCity);

// Get all
router.get("/", getAllCities);

// Get one by slug
router.get("/:slug", getCityBySlug);

// Update by ID
router.put("/:id", updateCity);

// Delete by ID
router.delete("/:id", deleteCity);

export default router;
