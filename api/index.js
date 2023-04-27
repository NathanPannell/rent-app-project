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

// jsonwebtoken for giving user cookies (tracking)
const jwt = require("jsonwebtoken");

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

// Creating a new account for user
app.post("/register", async (req, res) => {
  const { name, email, phone, date } = req.body;
  let { password } = req.body;
  // Check if email is unique
  db.collection("usermodels").findOne({ email: email }, async (e, found) => {
    if (e) {
      console.log(e);
    } else if (found) {
      res.json({ msg: "An account with this email already exists!" });
    } else {
      // Email is unique
      try {
        // Hashing password
        password = await bcrypt.hash(password, saltRounds);
        // Creating user document in MongoDB
        await UserModel.create({
          name,
          email,
          phone,
          date,
          password,
        });
        res.json({ msg: "New account has been created. You may now log in." });
      } catch (e) {
        res.status(422).json(e);
        console.log(e);
      }
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  // Find user's email
  const userDoc = await UserModel.findOne({ email });

  // Compare password if password exists
  if (userDoc) {
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // Correct password gets a cookie 🍪
      jwt.sign(
        { email: userDoc.email, id: userDoc._id },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json({ msg: "Successfully logged in!" });
        }
      );
    } else {
      res.json({ msg: "Password does not match." });
    }
  } else {
    res.json({ msg: "Email was not found." });
  }
});
