const router = require("express").Router();

const { addToCart, deleteFromCart } = require("../controllers/cart");

router.post("/add", addToCart);

router.post("/delete", deleteFromCart);

module.exports = router;
