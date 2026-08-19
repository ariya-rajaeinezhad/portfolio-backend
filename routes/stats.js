const express = require("express");
const router = express.Router();
const Stat = require("../models/Stat")

router.get("/", async (req, res) => {
    try {
        const stats = await Stat.find();
        res.json(stats);
    } catch (error) {
        res.status(500).json("server error");
    }
});

module.exports = router;