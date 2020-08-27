const { Router } = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");
// User Model
const User = require("../../models/User");

const JWT_SECRET = process.env.JWT_SECRET;
const router = Router();

module.exports = router;
