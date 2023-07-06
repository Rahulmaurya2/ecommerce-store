// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.post("/api/create-account", (req, res) => {
  // Handle account creation logic and database operations
  // Retrieve data from the request body (e.g., username, password, email)
  const { username, password, email } = req.body;

  // Perform necessary operations (e.g., insert user into the database)
  // ...

  // Send a response indicating success or failure
  res.status(200).json({ message: "Account created successfully" });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
