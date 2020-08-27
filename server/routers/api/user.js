const express = require("express");
const { register, login, logout } = require("../../controller/userController");
const router = express.Router();

// @route   POST /api/v1/client/register
// @desc    register new client
// @access  Public
router.post("/create", register);

// @route   GET /api/v1/user/login
// @desc    user login
// @access  Public
router.get("/:clientId", login);

// @route   POST /api/v1/user/logout
// @desc    logout user
// @access  Privat
router.post("/update", logout);

module.exports = router;
