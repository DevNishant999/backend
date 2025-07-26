import express from "express";
import Video from "../models/Video.js";

const router = express.Router();

// GET all or filter by page
router.get("/", async (req, res) => {
  const { page } = req.query;
  const query = page ? { page } : {};
  const videos = await Video.find(query).sort({ createdAt: -1 });
  res.json(videos);
});

// POST new video
router.post("/", async (req, res) => {
  const newVideo = new Video(req.body);
  await newVideo.save();
  res.json(newVideo);
});

// PUT update video
router.put("/:id", async (req, res) => {
  const updated = await Video.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE video
router.delete("/:id", async (req, res) => {
  await Video.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

export default router;
