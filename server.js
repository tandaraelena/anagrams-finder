const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 4000;
const dataDirectory = path.join(__dirname, 'data'); // Directory from which to serve files

// Enable CORS with wildcard
app.use(cors({ origin: '*' }));

// Serve static files from the specified directory
app.use(express.static(dataDirectory));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
