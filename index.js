const express = require("express");
const cors = require("cors");
const connectToMongo = require("./db");
const router = require("./Routes/router");
require("dotenv").config(); // 👈 Ensures .env variables are loaded

const app = express();
const port = process.env.PORT || 3001; 
// 👈 Use environment port if deploying

// Connect to MongoDB Atlas
connectToMongo();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use(router);

// Server Listener
app.listen(port, () => {
  console.log(`🚀 Server is running at http://localhost:${port}`);
});
