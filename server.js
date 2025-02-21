const express = require("express");

const connectDB = require("./DBConnect");
const PORT = 7000;
const app = express();

app.use(express.json()); //middleware

connectDB;
app.get("/", (req, res) => {
  res.send("MongoDB Atlas Connected Successfully!");
});
app.listen(PORT, (req, res) => {
  console.log("server started at utl http://localhost:" + `${PORT}`);
});
