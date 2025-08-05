
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables

const mongoURI = process.env.MONGO_URL; // from .env file

const connectToMongo = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB Atlas successfully!");
  } catch (error) {
    console.error("❌ Error connecting to MongoDB Atlas:", error);
  }
};

module.exports = connectToMongo;
