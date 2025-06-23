// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname)));

// ✅ Set headers to allow iframe embedding (including recursive)
app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "ALLOWALL"); // allow embedding
  res.setHeader("Content-Security-Policy", "frame-ancestors *"); // allow any ancestor
  next();
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});