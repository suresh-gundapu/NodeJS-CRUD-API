const mongoose = require("mongoose");

// Define User Schema
const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    age: { type: Number, required: true, min: 18 },
    createdAt: { type: Date, default: Date.now },
  },
  { timestamps: true } // Auto-adds createdAt & updatedAt fields
);

// Export User Model
module.exports = mongoose.model("User", UserSchema);
