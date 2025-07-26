import Blog from "../models/Blog.js";
import slugify from "slugify";

// ➜ Create Blog
export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      date,
      category,
      thumbnail,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    // If slug not given, auto-generate
    const finalSlug = slug
      ? slugify(slug, { lower: true, strict: true })
      : slugify(title, { lower: true, strict: true });

    const newBlog = new Blog({
      title,
      slug: finalSlug,
      content,
      date,
      category,
      thumbnail,
      seoTitle,
      seoDescription,
      seoKeywords,
    });

    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➜ Get All Blogs
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➜ Get Blog by Slug
export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) return res.status(404).json({ error: "Blog not found" });
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ➜ Update Blog
export const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      content,
      date,
      category,
      thumbnail,
      seoTitle,
      seoDescription,
      seoKeywords,
    } = req.body;

    const updatedData = {
      title,
      content,
      date,
      category,
      thumbnail,
      seoTitle,
      seoDescription,
      seoKeywords,
    };

    // Slug: if passed, use new slug else regenerate from title
    if (slug) {
      updatedData.slug = slugify(slug, { lower: true, strict: true });
    } else if (title) {
      updatedData.slug = slugify(title, { lower: true, strict: true });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      updatedData,
      { new: true }
    );

    res.json(updatedBlog);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// ➜ Delete Blog
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
