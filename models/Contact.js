// models/Contact.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    contactData: {
      banner: {
        title: String,
        subtitle: String,
        bgImage: String,
      },
      badges: [
        {
          icon: String,
          title: String,
        },
      ],
      contactInfo: {
        heading: String,
        description: String,
        email: String,
        phoneNumbers: [String],
        socialMedia: [
          {
            platform: String,
            url: String,
            icon: String,
          },
        ],
      },
      clinics: [
        {
          city: String,
          address: String,
          contact: String,
          icon: String,
          mapLink: String,
        },
      ],
      clinicSection: {
        heading: String,
        description: String,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.models.Contact ||
  mongoose.model("Contact", contactSchema);
