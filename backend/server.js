const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();
app.get("/api/goals", (req, res) => {
  // return json and pass an array
  // this makes the content type as json
  res.status(200).json({ message: "Get goals" });
});
app.listen(port, () => console.log(`Server started on port ${port}`));
