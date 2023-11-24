// routes/payment.js
const express = require("express");
const router = express.Router();
const User = require("../Models/User");
const connectDB = require("../db");

connectDB();

// Handle Paystack payment callback
router.post("/paystack/callback", async (req, res) => {
  try {
    // Extract user data from Paystack callback
    const { name, email } = req.body.data;

    // Save user to MongoDB
    const user = new User({
      name,
      email,
      // Add other fields as needed
    });
    await user.save();

    res.status(200).json({ success: true, message: "User saved successfully" });
  } catch (error) {
    console.error("Error processing Paystack callback:", error.message);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
