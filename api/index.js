// Init express app
const express = require("express");
const app = express();
app.use(express.json());

// Cors to allow access from other ip address (localhost:3000)
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// .env to store sensitive information (password to db etc.)
require("dotenv").config({ path: "../.env" });

// Importing mongo Models
const TestModel = require("./models/Test.js");
const UserModel = require("./models/User.js");
// Connecting to mongodb backend
const { default: mongoose } = require("mongoose");
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // Not sure what this does, allows db to connect tho 🤷
    writeConcern: { w: "majority" },
  })
  .then(() => {
    console.log("Connected to database!");

    // Start the server once connected to the database
    app.listen(process.env.API_PORT, () => {
      console.log(`Server listening on port ${process.env.API_PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to database:", err.message);
  });

// Test get from api
app.get("/hello", (req, res) => {
  res.json("Hello World!");
});

// Test post to mongodb with api
app.post("/test", async (req, res) => {
  const { text } = req.body;
  try {
    const userDoc = await TestModel.create({
      text,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(422).json(e);
    console.log(e);
  }
});
