// Initialize express app
const express = require("express");
const app = express();
app.use(express.json());

// Cors to allow access from other ip address (Ex. localhost:3000)
const cors = require("cors");
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

// .env to store sensitive information (password to db etc.)
require("dotenv").config({ path: "../.env" });

// Bcrypt for hashing passwords
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Importing mongo Models
const UserModel = require("./models/User.js");
// Connecting to mongodb backend
const { default: mongoose } = require("mongoose");
const db = mongoose.connection;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
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

app.post("/register", async (req, res) => {
  const { name, email, phone, date, password } = req.body;
  // Check if email is unique
  db.collection("usermodels").findOne({ email: email }, async (e, found) => {
    if (e) {
      // Handle error
      console.log(e);
    } else if (found) {
      // Email already exists
      res.json({ isDuplicate: true });
    } else {
      // Email is unique
      try {
        // Hashing password
        let hashed_password;
        await bcrypt.hash(password, saltRounds).then((hash) => {
          hashed_password = hash;
        });
        // Creating user document in MongoDB
        await UserModel.create({
          name,
          email,
          phone,
          date,
          password: hashed_password,
        });
        res.json({ isDuplicate: false });
      } catch (e) {
        res.status(422).json(e);
        console.log(e);
      }
    }
  });
});
