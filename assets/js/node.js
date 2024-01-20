const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Add this line for CORS support

const app = express();
const port = 3000;

// Use middleware to parse JSON and URL-encoded data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors()); // Enable CORS for all routes

// Serve your static files (HTML, CSS, etc.)
app.use(express.static('public'));

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  // Extract form data from the request
  const { email, subject, message } = req.body;

  // Replace with your email sending logic using nodemailer
  // ...

  // Send a response back to the client
  res.json({ success: true, message: 'Form submitted successfully!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
