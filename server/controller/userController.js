const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const { requireAuth, checkUser } = require("../middleware/authMiddleware");

// User Model
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  //incorrect password
  if (err.message === "incorrect password") {
    errors.password = "incorrect password";
  }
  //incorrect email
  if (err.email === "email doesn't exist") {
    errors.email = "email doesn't exist";
  }
  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that email is already registered";
    return errors;
  }
  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

const maxAge = 3600 * 24 * 10;

//create an account
exports.register = async (req, res) => {
  const {
    firstName,
    lastName,
    birthday,
    sexe,
    email,
    password,
    password1,
  } = req.body;
  try {
    // Simple validation
    if (
      !firstName ||
      !lastName ||
      !birthday ||
      !sexe ||
      !email ||
      !password ||
      !password1
    )
      return res.status(400).json({ message: "All fields required" });

    const user = await User.findOne({ email });
    if (user) return res.status(400).json({ message: "Email already used" });

    if (password !== password1)
      return res.status(400).json({ message: "Passwords don't match" });

    const salt = await bcrypt.genSalt(10);
    if (!salt)
      return res.status(500).json({ message: "something went wrong!" });

    const hash = await bcrypt.hash(password, salt);
    if (!hash)
      return res.status(500).json({ message: "something went wrong!" });
    const newUser = {
      firstName,
      lastName,
      birthday,
      sexe,
      email,
      password: hash,
    };

    const savedUser = await User.create(newUser);
    if (!savedUser)
      return res.status(400).json({ message: "something went wrong!" });

    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET, {});
    if (!token) throw Error("Couldnt sign the token");

    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      })
      .json({
        user: {
          id: savedUser._id,
          email: savedUser.email,
          first_name: savedUser.firstName,
          last_name: savedUser.lastName,
        },
      });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({
      message:
        process.env.NODE_ENV === "development"
          ? errors
          : "Something Went wrong",
    });
  }
};

//login to account
exports.login = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password)
      return res.status(400).json({ message: "All field required" });

    // const user = await User.login(email, password);
    const user = await User.findOne({ email });

    if (!user) return res.status(400).json({ message: "User Does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ _id: user.id }, JWT_SECRET, {});
    if (!token) throw Error("Couldnt sign the token");

    res
      .status(201)
      .cookie("token", token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      })
      .json({
        user: {
          id: user._id,
          email: user.email,
          first_name: user.first_name,
          last_name: user.last_name,
        },
      });
  } catch (err) {
    // Handel error in development
    const errors = handleErrors(err);
    res.status(500).json({ errors });
  }
};
//logout
exports.logout = async (req, res) => {
  res.cookie("token", "", { maxAge: 1 });
  res.redirect("/");
};
