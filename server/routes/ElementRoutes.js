const express = require("express");
const router = express.Router();
const Element = require("../models/Element");
const AllElements = require("../models/AllElements");

// Define your API endpoint to get elements
router.get("/elements", async (req, res) => {
  try {
    const elements = await Element.find();
    res.json(elements);
  } catch (error) {
    console.error("Error fetching elements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/allElements", async (req, res) => {
  try {
    const allElements = await AllElements.find();
    res.json(allElements);
  } catch (error) {
    console.error("Error fetching elements:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
