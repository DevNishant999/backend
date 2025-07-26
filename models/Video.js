import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    title: { type: String },
    thumbnail: { type: String, required: true },
    videoUrl: { type: String, required: true },
    page: { type: String, required: true }, // Example: "home", "results" etc.
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);
