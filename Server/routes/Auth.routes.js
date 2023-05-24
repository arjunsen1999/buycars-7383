const authRouter = require('express').Router();


authRouter.route("/signup").post();
authRouter.route('/login').post();


module.exports = {
    authRouter
}
