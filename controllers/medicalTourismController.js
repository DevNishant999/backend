import MedicalTourism from "../models/MedicalTourism.js";

// ✅ GET: Get single medical tourism page data
export const getMedicalTourism = async (req, res) => {
  try {
    const doc = await MedicalTourism.findOne();
    if (!doc)
      return res
        .status(404)
        .json({ success: false, message: "No data found." });
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("GET error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// ✅ CREATE: Add new medical tourism page (fail if exists)
export const createMedicalTourism = async (req, res) => {
  try {
    const { metaTitle, metaDescription, metaKeywords, sections } = req.body;

    // check if already exists
    const exists = await MedicalTourism.findOne();
    if (exists)
      return res
        .status(400)
        .json({ success: false, message: "Document already exists." });

    const doc = await MedicalTourism.create({
      metaTitle,
      metaDescription,
      metaKeywords: Array.isArray(metaKeywords)
        ? metaKeywords
        : String(metaKeywords)
            .split(",")
            .map((k) => k.trim()),
      sections,
    });

    res.status(201).json({ success: true, data: doc });
  } catch (err) {
    console.error("CREATE error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};

// ✅ UPDATE: Update existing single document (fail if not exists)
export const updateMedicalTourism = async (req, res) => {
  try {
    const { metaTitle, metaDescription, metaKeywords, sections } = req.body;

    const doc = await MedicalTourism.findOne();
    if (!doc)
      return res
        .status(404)
        .json({ success: false, message: "Document not found." });

    doc.metaTitle = metaTitle;
    doc.metaDescription = metaDescription;
    doc.metaKeywords = Array.isArray(metaKeywords)
      ? metaKeywords
      : String(metaKeywords)
          .split(",")
          .map((k) => k.trim());
    doc.sections = sections;

    await doc.save();
    res.json({ success: true, data: doc });
  } catch (err) {
    console.error("UPDATE error:", err);
    res.status(500).json({ success: false, message: "Server error." });
  }
};
