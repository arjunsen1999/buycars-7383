const { AuthModel } = require("../../models/Auth.model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const LoginController = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user with the provided email exists
    const user = await AuthModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ status: "Not found!", message: "User not found" });
    }

    // Compare the provided password with the stored hashed password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ status: "error", message: "Invalid password" });
    }

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY);

    // Create response
    const response = {
      status: "success",
      message: "Login successful",
      data: {
        token,
        first_name: user.first_name,
        last_name: user.last_name,
      },
    };

    return res.status(200).json(response);
  } catch (error) {
    // Create error response
    const error_response = {
      status: "fail",
      message: "An error occurred",
    };
    console.log(error);
    return res.status(500).json(error_response);
  }
});

module.exports = {
  LoginController,
};
