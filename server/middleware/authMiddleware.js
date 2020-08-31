const jwt = require("jsonwebtoken");
const User = require("../models/User");
const JWT_SECRET = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
  const { token } = req.cookies;
  try {
    console.log(token);
    if (token) {
      const decode = await jwt.verify(token, JWT_SECRET);
      req.body = {
        ...req.body,
        user_id: decode._id,
      };
      next();
    } else {
      return res
        .status(403)
        .json({ message: "access denied" })
        .redirect("/login");
    }
  } catch (error) {
    console.log("error");
    console.log("err:", error);
  }
};

module.exports = { auth };
