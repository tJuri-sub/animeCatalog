import jwt from "jsonwebtoken";

import { comparePassword } from "../middlewares/passHashing.js";

import UserData from "../models/admin.js";

export const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    const ifUserExist = await UserData.findOne({ username });

    if (!ifUserExist) {
      return res.status(404).json({
        error: "user not found",
      });
    }

    const user = ifUserExist;

    const isPassCompared = await comparePassword(password, user.password);

    if (isPassCompared) {
      jwt.sign(
        { id: user._id, username: user.username },
        process.env.JWT_SECRET,
        {},
        (err, token) => {
          if (err) {
            console.log("JWT error", err);
            return res.status(400).json({ error: " Token Generation Failed" });
          }
          res.cookie("token", token).json({ username: user.username });
        },
      );
      return;
    }

    if (!isPassCompared) {
      return res.status(401).json({
        error: "password do not match",
      });
    }
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const logout = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(400).json({ message: "Token is required for logout." });
    }

    try {
      jwt.verify(token, process.env.JWT_SECRET);
    } catch (err) {
      if (err.name === "TokenExpiredError") {
        return res
          .status(401)
          .json({ message: "Token expired. Please log in again." });
      }
      return res.status(401).json({
        message: "Invalid token.",
        error: err.message,
      });
    }

    // Clear the token cookie and return success
    res.clearCookie("token").json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("error: ", error);
    return res.status(500).json({ error: "Server error" });
  }
};
