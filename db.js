const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/portfolio");
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.error("Error while connecting to MongoDB", error.message);
        process.exit(1);
    };
};

module.exports = connectDB;