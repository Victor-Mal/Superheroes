const express = require("express");
const sPowerController = require("../controllers/superpowers");

const sPowerRouter = express.Router();

sPowerRouter
  .route("/")
  .get(sPowerController.getAllSuperpowers)
  .post(sPowerController.createSuperpowers);

sPowerRouter
  .route("/:id")
  .get(sPowerController.getSuperpowersById)
  .patch(sPowerController.updateSuperpowers)
  .delete(sPowerController.deleteSuperpowers);

module.exports = sPowerRouter;
