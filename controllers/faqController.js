// controllers/faqController.js
import Faq from "../models/Faq.js";

export const getFaqs = async (req, res) => {
  try {
    const { page } = req.query;
    const faqs = page ? await Faq.find({ page }) : await Faq.find();
    res.json(faqs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createFaq = async (req, res) => {
  try {
    const faq = new Faq(req.body);
    await faq.save();
    res.json(faq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateFaq = async (req, res) => {
  try {
    const faq = await Faq.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(faq);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteFaq = async (req, res) => {
  try {
    await Faq.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
