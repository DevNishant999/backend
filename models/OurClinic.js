import mongoose from "mongoose";

const OurClinicSchema = new mongoose.Schema({
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],
  content: {
    banner: {
      title: String,
      subtitle: String,
      bgImage: String,
    },
    introduction: {
      heading: String,
      description: String,
    },
    clinics: [
      {
        name: String,
        description: String,
        address: String,
        phone: String,
        email: String,
        images: [String],
      },
    ],
    features: {
      heading: String,
      description: String,
      items: [
        {
          icon: String,
          title: String,
          description: String,
        },
      ],
    },
    testimonials: {
      heading: String,
      description: String,
      image: String,
    },
  },
});

export default mongoose.models.OurClinic ||
  mongoose.model("OurClinic", OurClinicSchema);
