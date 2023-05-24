const OEM_SpecsRouter = require('express').Router();

OEM_SpecsRouter.route("/").post().get();

module.exports = {
    OEM_SpecsRouter
}
