const express = require("express");

const connectDB = require("./DBConnect");
const Users = require("./Models/Users");

const PORT = 7000;
const app = express();

app.use(express.json()); //middleware

connectDB();

app.get("/", (req, res) => {
  res.send("MongoDB Atlas Connected Successfully!");
});
//Add user
app.post("/addUser", async (req, res) => {
  try {
    let user = await new Users(req.body);
    user.save();
    res.send({
      status: 1,
      message: "User addedd successfully",
    });
  } catch (error) {
    res.json({
      status: 0,
      message: "User addedd failure",
      error: error,
    });
  }
});

//get all users

app.get("/users", async (req, res) => {
  try {
    let usersData = await Users.find();
    res.json({
      status: 1,
      message: "User data fetched successfully",
      data: usersData,
    });
  } catch (error) {
    res.json({
      status: 0,
      message: "User data not fetching",
      error: error,
    });
  }
});
//  Update User
app.put("/users/:id", async (req, res) => {
  const user = await Users.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

//  Delete User
app.delete("/users/:id", async (req, res) => {
  await Users.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});
app.listen(PORT, (req, res) => {
  console.log("server started at utl http://localhost:" + `${PORT}`);
});
