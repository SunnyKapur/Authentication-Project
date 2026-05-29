import UserModel from "../models/users.model.js";
import cookie from "cookie-parser";
import jwt from "jsonwebtoken"

export let registerController = async (req, res) => {
  try {
    let { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        error: "name and email are required",
      });
    }

    if (name.trim().lenth < 3) {
      return res.status(400).json({
        message: "Name must be at least 3 character long",
      });
    }

    // const emailRegax = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // if (!emailRegax.test(email)) {
    //   return res.status(400).json({
    //     message: "Invalid email format",
    //   });
    // }

    const newUser = await UserModel.create({ name, email });

    const token = jwt.sign({ id: newUser._id, email: newUser.email }, process.env.JWT_SECRET, {
      expiresIn: "7d"
    });

    res.cookie("token", token);

    return res.status(201).json({
      message: "User registered successfully",
      user: newUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};
