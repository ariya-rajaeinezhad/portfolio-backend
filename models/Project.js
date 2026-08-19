const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    tagline: { type: String },
    description: { type: String },
    image: { type: String },
    github: { type: String },
    demo: { type: String },
    role: { type: String },
    duration: { type: String },
    year: { type: String },
    status: { type: String },
    fulldescription: { type: String },
    challenge: { type: String },
    tags: { type: [String], default: [] },
    features: { type: [String], default: [] },
    screenshots: { type: [String], default: [] },
    learned: { type: [String], default: [] }
});

module.exports = mongoose.model("Project", projectSchema);