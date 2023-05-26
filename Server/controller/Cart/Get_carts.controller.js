const { Cart_Model } = require("../../models/Cart.model");
const asyncHandler = require("express-async-handler");

const Get_Carts_controller = asyncHandler(async (req, res) => {
  try {
    const userID = req.userID;
    const carts = await Cart_Model.find({ userID });
    // Create Response
    const response = {
      status: "success",
      data: carts,
    };
    // Send Response
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
  Get_Carts_controller,
};
