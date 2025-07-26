import OurClinic from "../models/OurClinic.js";

// ✅ Create
export const createOurClinic = async (req, res) => {
  try {
    const newPage = new OurClinic(req.body);
    await newPage.save();
    res
      .status(201)
      .json({
        success: true,
        message: "Our Clinic Page Created",
        data: newPage,
      });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: "Error creating page", error });
  }
};

// ✅ Get Single (Always get first one)
export const getOurClinic = async (req, res) => {
  try {
    const page = await OurClinic.findOne();
    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "No Clinic Page found" });
    }
    res.status(200).json(page);
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error fetching page", error });
  }
};

// ✅ Update
export const updateOurClinic = async (req, res) => {
  try {
    const page = await OurClinic.findOne();
    if (!page) {
      return res
        .status(404)
        .json({ success: false, message: "No Clinic Page found" });
    }
    const updated = await OurClinic.findByIdAndUpdate(page._id, req.body, {
      new: true,
    });
    res
      .status(200)
      .json({ success: true, message: "Updated successfully", data: updated });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error updating page", error });
  }
};
