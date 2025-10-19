const express = require('express');
const app = express();

// Middleware to log request time, method, and URL
const requestTimeStamp = (req, res, next) => {
  const timeStamp = new Date().toISOString();
  console.log(`${timeStamp} - ${req.method} request to ${req.url}`);
  next(); // move to the next middleware or route handler
};

// Apply middleware globally
app.use(requestTimeStamp);

// Route handlers
app.get('/', (req, res) => {
  res.json('Homepage');
});

app.get('/about', (req, res) => {
  res.json('About page');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
