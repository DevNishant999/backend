import PrivacyPolicy from "../models/PrivacyPolicy.js";

// CREATE
export const createPrivacyPolicy = async (req, res) => {
  try {
    const { title, banner, sections, contact } = req.body;
    const pp = new PrivacyPolicy({ title, banner, sections, contact });
    const saved = await pp.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET LATEST
export const getPrivacyPolicy = async (req, res) => {
  try {
    const pp = await PrivacyPolicy.findOne().sort({ createdAt: -1 });
    res.json(pp);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
export const updatePrivacyPolicy = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, banner, sections, contact } = req.body;
    const updated = await PrivacyPolicy.findByIdAndUpdate(
      id,
      { title, banner, sections, contact },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
export const deletePrivacyPolicy = async (req, res) => {
  try {
    const { id } = req.params;
    await PrivacyPolicy.findByIdAndDelete(id);
    res.json({ message: "Deleted successfully!" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
