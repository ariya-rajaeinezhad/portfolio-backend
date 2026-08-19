const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/api/skills", require("./routes/skills"));
app.use("/api/stats", require("./routes/stats"));
app.use("/api/timeline", require("./routes/timeline"));
app.use("/api/testimonials", require("./routes/testimonials"));
app.use("/api/projects", require("./routes/projects"));
app.use("/api/certificates", require("./routes/certificates"));

app.listen(5000, () => {
    console.log("Server Running Successfully!");
})