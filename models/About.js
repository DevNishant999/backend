import mongoose from "mongoose";

const { Schema, model } = mongoose;

const certificationSchema = new Schema({
  icon: String,
  text: String,
});

const featureSchema = new Schema({
  num: String,
  title: String,
  desc: String,
});

const timelineEventSchema = new Schema({
  year: String,
  title: String,
  desc: String,
});

const clinicLocationSchema = new Schema({
  image: String,
  branch: String,
});

const doctorSchema = new Schema({
  name: String,
  degree: String,
  specialization: String,
  image: String,
});

const expertiseFeatureSchema = new Schema({
  title: String,
  description: String,
  icon: String,
});

const celebTestimonialSchema = new Schema({
  name: String,
  title: String,
  review: String,
  details: String,
  stars: Number,
  image: String,
});

const comparisonRowSchema = new Schema({
  feature: String,
  qht: String,
  others: String,
});

const aboutSchema = new Schema(
  {
    metaTitle: String,
    metaDescription: String,
    metaKeywords: [String],
    aboutPage: {
      banner: String,
      establishmentSection: {
        title: String,
        description: String,
        certifications: [certificationSchema],
        features: [featureSchema],
      },
      timeline: {
        title: String,
        subtitle: String,
        events: [timelineEventSchema],
      },
      clinicLocations: {
        title: String,
        description: String,
        cities: [clinicLocationSchema],
      },
      doctors: [doctorSchema],
      expertise: {
        title: String,
        subtitle: String,
        features: [expertiseFeatureSchema],
      },
      celebTestimonials: [celebTestimonialSchema],
      comparisonTable: {
        title: String,
        description: String,
        rows: [comparisonRowSchema],
      },
      medicalTourism: {
        title: String,
        description: String,
      },
    },
  },
  { timestamps: true }
);

export default model("About", aboutSchema);
