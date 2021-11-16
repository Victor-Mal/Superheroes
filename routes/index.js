const express = require("express");
/* Main Router */

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello Express!");
});

module.exports = router;
