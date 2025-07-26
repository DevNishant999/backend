import express from "express";
import {
  createCountry,
  getAllCountries,
  getCountryBySlug,
  updateCountry,
  deleteCountry,
} from "../controllers/countryController.js";

const router = express.Router();

// Create
router.post("/", createCountry);

// Get all
router.get("/", getAllCountries);

// Get one by slug
router.get("/:slug", getCountryBySlug);

// Update by ID
router.put("/:id", updateCountry);

// Delete by ID
router.delete("/:id", deleteCountry);

export default router;
