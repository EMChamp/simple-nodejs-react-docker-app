// server.js
const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable if it is set, otherwise default to 5040
const port = process.env.PORT || 5040;

// Enable CORS for specific origins
const corsOptions = {
  origin: 'http://localhost:5041',
};
app.use(cors(corsOptions));

app.get('/endpoint', (req, res) => {
  res.send('Data from Backend API');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
