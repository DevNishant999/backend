import express from "express";
import AWS from "aws-sdk";
import multer from "multer";
import dotenv from "dotenv";

dotenv.config();

const router = express.Router();
const storage = multer.memoryStorage();
const upload = multer({ storage, limits: { fileSize: 5 * 1024 * 1024 } });

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: process.env.AWS_REGION, // Example: eu-north-1
});

// ✅ POST /upload - Upload image to S3
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const file = req.file;

    const params = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Key: `testimonials/${Date.now()}_${file.originalname}`,
      Body: file.buffer,
      ContentType: file.mimetype,
    };

    const result = await s3.upload(params).promise();
    res.json({ url: result.Location });
  } catch (error) {
    console.error("Upload error:", error);
    res.status(500).json({ error: "Upload failed", message: error.message });
  }
});

// ✅ GET /upload/media - List all files from bucket (can filter prefix)
router.get("/media", async (req, res) => {
  const prefix = req.query.prefix || ""; // optional: "testimonials/", "videos/"
  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Prefix: prefix, // optional folder filter
  };

  try {
    const data = await s3.listObjectsV2(params).promise();

    const files = data.Contents.map((item) => ({
      key: item.Key,
      url: `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/${item.Key}`,
      lastModified: item.LastModified,
      size: item.Size,
    }));

    res.json(files);
  } catch (error) {
    console.error("List error:", error);
    res
      .status(500)
      .json({ error: "Failed to list media", message: error.message });
  }
});

router.delete("/media", async (req, res) => {
  const { key } = req.body;

  if (!key) {
    return res.status(400).json({ error: "Missing key" });
  }

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: key,
  };

  try {
    await s3.deleteObject(params).promise();
    res.json({ message: "File deleted" });
  } catch (error) {
    console.error("Delete error:", error);
    res.status(500).json({ error: "Delete failed", message: error.message });
  }
});

export default router;
