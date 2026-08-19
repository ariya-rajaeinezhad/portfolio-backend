const express = require("express");
const router = express.Router();
const Certificate = require("../models/Certificate");

router.get("/", async (req, res) => {
    try {
        const certificates = await Certificate.find();
        res.json(certificates);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;