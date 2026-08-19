const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
    title: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true }
});

module.exports = mongoose.model("Certificate", certificateSchema);