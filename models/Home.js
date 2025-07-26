// models/Home.js
import mongoose from "mongoose";

const { Schema, model } = mongoose;

const HomeSchema = new Schema({
  metaTitle: String,
  metaDescription: String,
  metaKeywords: [String],
  sections: {
    banner: {
      heading: String,
      subheading: String,
      cta: {
        text: String,
        link: String,
      },
    },
    celebritySlider: {
      title: String,
      images: [String],
    },
    truthSection: {
      title: String,
      subtitle: String,
      points: [
        {
          number: String,
          title: String,
          description: String,
        },
      ],
    },
    ourPromise: {
      title: String,
      subtitle: String,
      promises: [
        {
          title: String,
          description: String,
        },
      ],
    },
    surgeryGallery: {
      images: [String],
    },
    processSection: {
      title: String,
      description: String,
      stages: [
        {
          label: String,
          percent: Number,
          image: String,
        },
      ],
    },
    fullWidthImage: {
      image: String,
      altText: String,
    },
    resultsGallery: {
      title: String,
      description: String,
      beforeAfterPairs: [
        {
          before: String,
          after: String,
        },
      ],
    },
    bookSection: {
      title: String,
      description: String,
      benefits: [String],
      image: String,
    },
    actionSection: {
      title: String,
      description: String,
      cta: {
        text: String,
        link: String,
      },
    },
  },
});

const Home = model("Home", HomeSchema);
export default Home;
