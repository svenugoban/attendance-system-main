const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const users = require("./users");

const router = express.Router();

// Secret key for JWT
const SECRET_KEY = "your_secret_key";

router.post("/login", (req, res) => {
  const { username, password } = req?.body;

  // Find user by username
  const user = users.find((u) => u.username === username);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Compare passwords
  const isPasswordValid = bcrypt.compareSync(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }

  // Generate JWT
  const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: "30d" });

  res.status(200).json({
    message: "Login successful",
    token: token,
  });
});

module.exports = router;
