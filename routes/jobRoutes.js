import express from "express";
import {
  getJobs,
  getJobById,
  createJob,
  updateJob,
  deleteJob
} from "../controllers/jobController.js";

const router = express.Router();

router.get("/", getJobs);       // GET all jobs
router.get("/:id", getJobById); // GET job by id
router.post("/", createJob);    // CREATE job
router.put("/:id", updateJob);  // UPDATE job
router.delete("/:id", deleteJob); // DELETE job

export default router;
