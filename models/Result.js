// models/Result.js
import mongoose from "mongoose";

const resultSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    grafts: { type: Number, required: true },
    age: { type: Number, required: true },
    area: { type: String, required: true },
    grade: { type: String, required: true },
    resultTime: { type: String, required: true },
    beforeImage: { type: String, required: true },
    afterImage: { type: String, required: true },
    doctorNotes: [{ type: String }],
    surgeryCount: { type: String, required: true },
    isPromo: { type: Boolean, default: false },
    isVideo: { type: Boolean, default: false },
    promoType: { type: String },
    videoUrl: { type: String },
    cta: { type: String },
    phone: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Result", resultSchema);
