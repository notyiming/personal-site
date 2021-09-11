var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
  const file = `${__dirname}/../resources/YiMingTan.pdf`;
  res.download(file); // Set disposition and send it.
});

module.exports = router;
