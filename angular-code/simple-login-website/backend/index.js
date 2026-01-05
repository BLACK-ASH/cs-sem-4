import express from "express";
import bcrypt from "bcryptjs";
import jsonwebtoken from "jsonwebtoken";
import cors from "cors";
import User from "./database/user.model.js";
import connectDb from "./database/connectDb.js";
const port = 3000;

// Middeware
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Database Connection Using Mongoose
await connectDb();

// Register Page
app.post("/register", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Data Validation
  try {
    // If firstName is null
    if (!firstName.trim() | !firstName) {
      return res.status(400).json({
        message: "firstName is required.",
        payload: null,
        token: null,
      });
    }

    // If lastName is null
    if (!lastName.trim() | !lastName) {
      return res
        .status(400)
        .json({ message: "lastName is required.", payload: null, token: null });
    }

    // If password is null
    if (!password.trim() | !password) {
      return res
        .status(400)
        .json({ message: "password is required.", payload: null, token: null });
    }

    // If email is null
    if (!email.trim() | !email) {
      return res
        .status(400)
        .json({ message: "email is required.", payload: null, token: null });
    }

    // If User Already Exists
    const user = await User.findOne({ email });
    if (!user) {
      // Hashing password and Creating User
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        firstName,
        lastName,
        email,
        password: hashPassword,
      });

      const token = jsonwebtoken.sign(JSON.stringify(newUser), "secret");

      // Sending Response
      return res.status(200).json({ message: "success", newUser, token });
    }

    return res.status(400).json({
      message: "User Already Exists",
      payload: null,
      token: null,
    });
  } catch (error) {
    // If any error happen
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error.message,
    });
  }
});

// Login Page
app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Data Validation
  try {
    // If password is null
    if (!password.trim() | !password) {
      return res
        .status(400)
        .json({ message: "password is required.", payload: null, token: null });
    }

    // If email is null
    if (!email.trim() | !email) {
      return res
        .status(400)
        .json({ message: "email is required.", payload: null, token: null });
    }

    // If User Doesn't Exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "User Doesn't Exists",
        payload: null,
        token: null,
      });
    }

    // If Password Doesn't Match
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Password Doesn't Match",
        payload: null,
        token: null,
      });
    }

    const token = jsonwebtoken.sign(JSON.stringify(user), "secret");

    return res.status(200).json({ message: "success", user, token });
  } catch (error) {
    // If any error happen
    return res.status(500).json({
      message: "Internal Server Error",
      detail: error.message,
    });
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  return res.status(200).json(users);
});

app.listen(port, () => {
  console.log(`Sever Started \n listen on http://localhost:${port}`);
});
