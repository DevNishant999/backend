import Country from "../models/Country.js";

// ➜ Create new Country
export const createCountry = async (req, res) => {
  try {
    const newCountry = new Country(req.body);
    await newCountry.save();
    res.status(201).json(newCountry);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ➜ Get all Countries
export const getAllCountries = async (req, res) => {
  try {
    const countries = await Country.find();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➜ Get single Country by slug
export const getCountryBySlug = async (req, res) => {
  try {
    const country = await Country.findOne({ slug: req.params.slug });
    if (!country) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(country);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ➜ Update Country by ID
export const updateCountry = async (req, res) => {
  try {
    const updated = await Country.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updated) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json(updated);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// ➜ Delete Country by ID
export const deleteCountry = async (req, res) => {
  try {
    const deleted = await Country.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: "Country not found" });
    }
    res.json({ message: "Country deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
