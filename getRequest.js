// Requiring module
const express = require("express");
// Creating express object
const app = express();
//Handling GET request

app.get("https://gmail.googleapis.com", (req, res) => {
  res.send();
  res.end();
});

// Port Number
const PORT = process.env.PORT || 8080;

// Server Setup
app.listen(PORT, console.log(`Server started on port ${PORT}`));
