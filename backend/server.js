const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const doctorRoutes = require("./routes/doctorRoutes");

dotenv.config(); // Load .env variables

const app = express();
const PORT = process.env.PORT || 5000;
console.log("server.js");
// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use("/api/doctors", doctorRoutes); // Base route for courses

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
