const cars_inventory_Router = require("express").Router();
const {
  checkIsDealerMiddlware,
} = require("../middleware/CheckIsDealer.middleware");
const {
  checkIsLoginMiddleware,
} = require("../middleware/CheckIsLogin.middleware");

cars_inventory_Router
  .route("/dealer")
  .post(checkIsLoginMiddleware, checkIsDealerMiddlware)
  .get(checkIsLoginMiddleware, checkIsDealerMiddlware);

cars_inventory_Router.route("/").get();

cars_inventory_Router
  .route("/:id")
  .get(checkIsLoginMiddleware, checkIsDealerMiddlware)
  .patch(checkIsLoginMiddleware, checkIsDealerMiddlware)
  .delete(checkIsLoginMiddleware, checkIsDealerMiddlware);

module.exports = {
  cars_inventory_Router,
};
