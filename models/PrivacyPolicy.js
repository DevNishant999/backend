import mongoose from "mongoose";

const privacyPolicySchema = new mongoose.Schema(
  {
    title: String,
    banner: String,
    sections: [
      {
        heading: String,
        paragraph: String,
        points: [String],
      },
    ],
    contact: String,
  },
  { timestamps: true }
);

export default mongoose.model("PrivacyPolicy", privacyPolicySchema);
