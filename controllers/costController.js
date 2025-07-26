// controllers/costController.js
import Cost from "../models/Cost.js";

// ➜ CREATE
export const createCost = async (req, res) => {
  try {
    const newCost = new Cost(req.body); // ✅ body mein meta bhi hoga
    const savedCost = await newCost.save();
    res.status(201).json(savedCost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ➜ GET ALL
export const getAllCosts = async (req, res) => {
  try {
    const costs = await Cost.find();
    res.status(200).json(costs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➜ GET SINGLE BY SLUG
export const getCostBySlug = async (req, res) => {
  try {
    const cost = await Cost.findOne({ slug: req.params.slug });
    if (!cost) return res.status(404).json({ message: "Not Found" });
    res.status(200).json(cost);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// ➜ UPDATE
export const updateCost = async (req, res) => {
  try {
    const updatedCost = await Cost.findByIdAndUpdate(
      req.params.id,
      { $set: req.body }, // ✅ updated meta bhi save ho jayega
      { new: true }
    );
    res.status(200).json(updatedCost);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// ➜ DELETE
export const deleteCost = async (req, res) => {
  try {
    await Cost.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
