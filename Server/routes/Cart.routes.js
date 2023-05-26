const cart_Router = require("express").Router();

cart_Router.route("/").post().get();
cart_Router.route("/:id").delete();

module.exports = {
  cart_Router,
};
