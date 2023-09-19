const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  let token;
  if (req.headers?.authorization?.startsWith("Bearer")) {
    token = req.headers.authorization.split(" ")[1];
    try {
      if (token) {
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
          if (err) res.status(401).json("Token is not valid!");
          req.user = user;
          next();
        });
      }
    } catch (err) {
      return res.status(401).json("You are not authenticated!");
    }
  }
};

module.exports = { authMiddleware };
