import PaymentTC from "../models/PaymentTC.js";

// Create
export const createPaymentTC = async (req, res) => {
  try {
    const { title, banner, sections, note } = req.body;
    const paymentTC = new PaymentTC({ title, banner, sections, note });
    const saved = await paymentTC.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get (latest)
export const getPaymentTC = async (req, res) => {
  try {
    const tc = await PaymentTC.findOne().sort({ createdAt: -1 });
    res.json(tc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update
export const updatePaymentTC = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, banner, sections, note } = req.body;
    const updated = await PaymentTC.findByIdAndUpdate(
      id,
      { title, banner, sections, note },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
