const mongoose = require("mongoose");

const TimelineSchema = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
});

module.exports = mongoose.model("Timeline", TimelineSchema);