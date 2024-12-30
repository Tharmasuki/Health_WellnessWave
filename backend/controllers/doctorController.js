const Doctor = require("../models/Doctor");

// Create a doctor
const createDoctor = async (req, res) => {
  const { name, field, image, description } = req.body;

  if (!name || !field || !image || !description) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const doctor = new Doctor({ name, field, image, description });
    const savedDoctor = await doctor.save();
    res.status(201).json(savedDoctor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all doctors
const getDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find();
    res.status(200).json(doctors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { createDoctor, getDoctors };
