import mongoose from "mongoose";

const MedicalTourismSchema = new mongoose.Schema(
  {
    metaTitle: String,
    metaDescription: String,
    metaKeywords: [String],
    sections: {
      banner: {
        title: String,
        subtitle: String,
        backgroundImage: String,
      },
      topChoice: {
        heading: String,
        description: String,
        image: String,
        features: [
          {
            icon: String,
            title: String,
            description: String,
          },
        ],
      },
      whySection: {
        image: String,
      },
      comparison: {
        heading: String,
        description: String,
        table: [
          {
            feature: String,
            qht: String,
            fue: String,
          },
        ],
      },
      processTabs: {
        heading: String,
        description: String,
        tabs: [
          {
            title: String,
            icon: String,
            content: String,
          },
        ],
      },
      costComparison: {
        heading: String,
        countries: [
          {
            country: String,
            flag: String,
            price: String,
            desc: String,
          },
        ],
      },
      glimpse: {
        heading: String,
        description: String,
        images: [String],
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.MedicalTourism ||
  mongoose.model("MedicalTourism", MedicalTourismSchema);
