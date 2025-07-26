// controllers/contactController.js
import Contact from "../models/Contact.js";

// GET (always returns single page)
export const getContact = async (req, res) => {
  try {
    const doc = await Contact.findOne();
    res.json(doc);
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).json({ error: "Server error fetching contact page." });
  }
};

// CREATE new (only if not exists)
export const createContact = async (req, res) => {
  try {
    const exists = await Contact.findOne();
    if (exists) {
      return res.status(400).json({ error: "Contact page already exists." });
    }
    const doc = new Contact(req.body);
    await doc.save();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("CREATE error:", err);
    res.status(500).json({ error: "Server error creating contact page." });
  }
};

// UPDATE single page
export const updateContact = async (req, res) => {
  try {
    const doc = await Contact.findOne();
    if (!doc) return res.status(404).json({ error: "Contact page not found." });

    doc.contactData = req.body.contactData;
    await doc.save();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("UPDATE error:", err);
    res.status(500).json({ error: "Server error updating contact page." });
  }
};
