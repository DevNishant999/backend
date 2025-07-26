import mongoose from "mongoose";

const testimonialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  location: String,
  rating: { type: Number, min: 1, max: 5 },
  text: String,
  image: String,
  grade: String, // e.g. Grade I, Grade II, etc.
}, { timestamps: true });

export default mongoose.model("Testimonial", testimonialSchema);
