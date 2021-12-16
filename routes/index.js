const express = require("express");
const router = express.Router();
const accounts = await klaytn.enable();
const account = accounts[0];

/* GET home page. */
router.get("/", function (req, res, next) {
  if (typeof window.klaytn != "undefined") console.log("Hello !");
  else {
    console.log("Hello ! !");
  }

  res.render("index", { title: req.session });
});

router.post("/connect", function (req, res, next) {
  window.klaytn.enable();
});

klaytn.on("accountsChanged", function (accounts) {
  console.log("Change");
});

module.exports = router;
