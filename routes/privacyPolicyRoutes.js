import express from "express";
import {
  createPrivacyPolicy,
  getPrivacyPolicy,
  updatePrivacyPolicy,
  deletePrivacyPolicy,
} from "../controllers/privacyPolicyController.js";

const router = express.Router();

router.post("/", createPrivacyPolicy);
router.get("/", getPrivacyPolicy);
router.put("/:id", updatePrivacyPolicy);
router.delete("/:id", deletePrivacyPolicy);

export default router;
