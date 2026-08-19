const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

router.get("/", async (req, res) => {
    try {
        const technicalSkills = await Skill.find({ category: "technical" });
        const tools = await Skill.find({ category: "tool" });
        const softSkills = await Skill.find({ category: "soft" });
        res.json({ technicalSkills, tools, softSkills });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;