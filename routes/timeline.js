const express = require("express");
const router = express.Router();
const Timeline = require("../models/Timeline");

router.get("/", async (req, res) => {
    try {
        const timeline = await Timeline.find();
        res.json(timeline);
    } catch (error) {
        res.status(500).json("server error");
    }
});

module.exports = router;