const mongoose = require("mongoose");

const skillSchema = new mongoose.Schema({
    name: { type: String, required: true },
    level: { type: Number },
    category: { type: String, required: true, enum: ["technical", "tool", "soft"] }
});

module.exports = mongoose.model("Skill", skillSchema);