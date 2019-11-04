var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/product/:id", function(req, res, next) {
  res.render("pages/product-detail");
});

router.get("/cart", function(req, res, next) {
  res.render("pages/cart");
});

router.get("/search", function(req, res, next) {
  res.render('pages/search')
});

module.exports = router;
