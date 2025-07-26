// models/Faq.js
import mongoose from "mongoose";

const faqSchema = new mongoose.Schema({
  question: { type: String, required: true },
  answer: { type: String, required: true },
  page: { type: String, default: "general" }, // e.g., 'home', 'cost', etc.
});

export default mongoose.model("Faq", faqSchema);
