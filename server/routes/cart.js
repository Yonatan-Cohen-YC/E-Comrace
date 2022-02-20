const router = require("express").Router();

const { addToCart, deleteFromCart } = require("../controllers/cart");

const { verifyUser } = require("../middlewear/authMiddlewear");

router.post("/add", verifyUser, addToCart);

router.post("/delete", verifyUser, deleteFromCart);

module.exports = router;
