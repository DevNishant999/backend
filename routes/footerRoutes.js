import express from "express";
import {
  getFooter,
  createFooter,
  updateFooter,
} from "../controllers/footerController.js";

const router = express.Router();

router.get("/", getFooter);
router.post("/", createFooter);
router.put("/:id", updateFooter);

export default router;
