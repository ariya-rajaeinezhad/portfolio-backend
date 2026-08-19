const mongoose = require("mongoose");

const StatSchema = new mongoose.Schema({
    value: { type: String, required: true },
    label: { type: String, required: true },
    icon: { type: String, required: true }
});

module.exports = mongoose.model("Stat", StatSchema);