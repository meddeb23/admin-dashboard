const express = require("express");
const { register, login, logout } = require("../../controller/userController");
const router = express.Router();
const { auth } = require("../../middleware/authMiddleware");

// @route   POST /api/v1/client/register
// @desc    register new client
// @access  Public
router.post("/register", register);

// @route   GET /api/v1/user/login
// @desc    user login
// @access  Public
router.post("/login", login);

// @route   POST /api/v1/user/logout
// @desc    logout user
// @access  Privat
router.get("/logout", auth, logout);

module.exports = router;
