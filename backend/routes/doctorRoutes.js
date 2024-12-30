const express = require("express");
const { createDoctor, getDoctors } = require("../controllers/doctorController");
const router = express.Router();

router.post("/create", createDoctor); // Create a new course
router.get("/", getDoctors); // Get all courses

module.exports = router;
