// controllers/homeController.js
import Home from "../models/Home.js";

// GET
export const getHome = async (req, res) => {
  try {
    const home = await Home.findOne();
    if (!home) {
      return res.status(404).json({ message: "Home page not found" });
    }
    res.json(home);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// CREATE (Optional, mostly you'll update existing one)
export const createHome = async (req, res) => {
  try {
    const newHome = new Home(req.body);
    const saved = await newHome.save();
    res.json(saved);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE
export const updateHome = async (req, res) => {
  try {
    const updated = await Home.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true, // Creates if not exist
    });
    res.json(updated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE
export const deleteHome = async (req, res) => {
  try {
    const deleted = await Home.findOneAndDelete();
    if (!deleted) {
      return res.status(404).json({ message: "Nothing to delete" });
    }
    res.json({ message: "Home page deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
