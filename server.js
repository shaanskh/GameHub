
const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Read JSON data sent by the browser
app.use(express.json());

// Serve our website files
app.use(express.static(path.join(__dirname, "public")));

// Test endpoint
app.get("/api/health", (req, res) => {
  res.json({
    status: "success",
    message: "GameHub backend is running!"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`GameHub is running on port ${PORT}`);
});
