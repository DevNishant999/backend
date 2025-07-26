import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
  address: String,
  mapLink: String,
});

const branchSchema = new mongoose.Schema({
  title: String,
  addresses: [addressSchema],
});

const linkSchema = new mongoose.Schema({
  title: String,
  url: String,
});

const footerSchema = new mongoose.Schema({
  branches: [branchSchema],
  contact: {
    phone: String,
    email: String,
  },
  socialLinks: {
    instagram: String,
    facebook: String,
    linkedin: String,
  },
  services: [
    {
      title: String,
      url: String,
    },
  ],
  companyLinks: [
    {
      title: String,
      url: String,
    },
  ],
  cities: [
    {
      title: String,
      url: String,
    },
  ],
  countries: [
    {
      title: String,
      url: String,
    },
  ],
  copyright: String,
});

export default mongoose.model("Footer", footerSchema);
