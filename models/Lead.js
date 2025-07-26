// models/Lead.js
import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  phone: String,
  city: String,
  email: String,
  utmParams: {
    utm_source: String,
    utm_medium: String,
    utm_campaign: String,
    utm_content: String,
    campaign_id: String,
    GCLid: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Lead || mongoose.model("Lead", leadSchema);
