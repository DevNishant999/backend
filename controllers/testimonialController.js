import Testimonial from "../models/Testimonial.js";

export const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find();
  res.json(testimonials);
};

export const createTestimonial = async (req, res) => {
  const newTestimonial = new Testimonial(req.body);
  const saved = await newTestimonial.save();
  res.json(saved);
};

export const updateTestimonial = async (req, res) => {
  const { id } = req.params;
  const updated = await Testimonial.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

export const deleteTestimonial = async (req, res) => {
  const { id } = req.params;
  await Testimonial.findByIdAndDelete(id);
  res.json({ success: true });
};
