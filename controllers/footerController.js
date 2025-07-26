import Footer from "../models/Footer.js";

// Get
export const getFooter = async (req, res) => {
  try {
    const footer = await Footer.findOne();
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Create
export const createFooter = async (req, res) => {
  try {
    const footer = new Footer(req.body);
    await footer.save();
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updateFooter = async (req, res) => {
  try {
    const footer = await Footer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(footer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
