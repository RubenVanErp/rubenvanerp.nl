// server.js
const express = require('express');
const path = require('path');
const app = express();
const PORT = 5001;

// Serve static files from "public" directory
app.use(express.static(path.join(__dirname)));

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});