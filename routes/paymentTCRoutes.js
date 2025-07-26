import express from "express";
import {
  createPaymentTC,
  getPaymentTC,
  updatePaymentTC,
} from "../controllers/paymentTCController.js";

const router = express.Router();

router.post("/", createPaymentTC);
router.get("/", getPaymentTC);
router.put("/:id", updatePaymentTC);

export default router;
