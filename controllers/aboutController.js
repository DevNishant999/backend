import About from "../models/About.js";

// GET all about data
export const getAbout = async (req, res) => {
  try {
    const about = await About.findOne();
    if (!about) {
      return res.status(404).json({ message: "About page not found" });
    }
    res.json(about);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// POST create about data
export const createAbout = async (req, res) => {
  try {
    const about = new About(req.body);
    await about.save();
    res.status(201).json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// PUT update about data
export const updateAbout = async (req, res) => {
  try {
    const about = await About.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.json(about);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE about data
export const deleteAbout = async (req, res) => {
  try {
    await About.deleteMany({});
    res.json({ message: "About page deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
