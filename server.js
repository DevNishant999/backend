import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import nodemailer from "nodemailer";
import userRoutes from "./routes/userRoutes.js";
import paymentTCRoutes from "./routes/paymentTCRoutes.js";
import privacyPolicyRoutes from "./routes/privacyPolicyRoutes.js";
import footerRoutes from "./routes/footerRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import resultRoutes from "./routes/resultRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import faqRoutes from "./routes/faqRoutes.js";
import videoRoutes from "./routes/videoRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import cityRoutes from "./routes/cityRoutes.js";
import countryRoutes from "./routes/countryRoutes.js";
import costRoutes from "./routes/costRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";
import ourClinicRoutes from "./routes/ourClinicRoutes.js";
import medicalTourismRoutes from "./routes/medicalTourismRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import homeRoutes from "./routes/homeRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Routes
app.use("/api/users", userRoutes);
app.use("/api/payment-tc", paymentTCRoutes);
app.use("/api/privacy-policy", privacyPolicyRoutes);
app.use("/api/footer", footerRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/results", resultRoutes);
app.use("/api/testimonials", testimonialRoutes);
app.use("/api/faqs", faqRoutes);
app.use("/api/videos", videoRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/cities", cityRoutes);
app.use("/api/countries", countryRoutes);
app.use("/api/cost", costRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/our-clinic", ourClinicRoutes);
app.use("/api/medical-tourism", medicalTourismRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/about", aboutRoutes);
app.use("/api/home", homeRoutes);
app.use("/api/upload", uploadRoutes);
app.use("/api/jobs", jobRoutes);

// MongoDB Connection + Start Server
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () =>
      console.log(`✅ Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.error("❌ DB connection error:", err));
