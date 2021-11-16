const express = require("express");
const shRouter = require("./superheroes");

/* Main Router */
const router = express.Router();

/* /api */

router.use("/superheroes", shRouter);

module.exports = router;
