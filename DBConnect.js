const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("🔄 Trying to connect to MongoDB...");
    await mongoose.connect(
      process.env.MONGO_URI,
      // "mongodb://127.0.0.1:27017/myLocalDB",//local DB
      //"mongodb+srv://suresh_admin:suresh_admin@mycluster.pkmr4.mongodb.net/myLocalDB?retryWrites=true&w=majority", //cloud DB
      {
        serverSelectionTimeoutMS: 5000,
        connectTimeoutMS: 10000,
      }
    );

    console.log("🔥 MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    console.error(
      "💡 Possible Fix: Check if MongoDB is running with 'mongosh'"
    );
    process.exit(1);
  }
};

module.exports = connectDB;
