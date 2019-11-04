var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function(req, res, next) {
  res.send("respond with a resource");
});

router.get("/register", function(req, res, next) {
  res.render("pages/register");
});

router.get("/login", function(req, res, next) {
  res.render("pages/login");
});
router.get("/forgot", function(req, res, next) {
  res.render("pages/forgot");
});

module.exports = router;
