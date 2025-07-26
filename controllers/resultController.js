// controllers/resultController.js
import Result from "../models/Result.js";

// Get all transformations
export const getResults = async (req, res) => {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

// Create or update
export const createResult = async (req, res) => {
  try {
    const newResult = new Result(req.body);
    await newResult.save();
    res.status(201).json(newResult);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const updateResult = async (req, res) => {
  try {
    const updated = await Result.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const deleteResult = async (req, res) => {
  try {
    await Result.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
