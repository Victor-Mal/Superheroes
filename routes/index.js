const express = require("express");
const router = express.Router();
const shRouter = require("./superheroes");
const sPowerRouter = require("./superpowers");


router.use("/superheroes", shRouter);
router.use("/superpowers", sPowerRouter);

module.exports = router;
