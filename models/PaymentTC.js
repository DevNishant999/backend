import mongoose from "mongoose";

const paymentTCSchema = new mongoose.Schema(
  {
    title: String,
    banner: String, // optional banner heading
    sections: [
      {
        heading: String,
        points: [String],
      },
    ],
    note: [String],
  },
  { timestamps: true }
);

export default mongoose.model("PaymentTC", paymentTCSchema);
