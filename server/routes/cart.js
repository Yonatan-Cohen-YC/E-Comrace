const router = require("express").Router();

const {
  addToCart,
  deleteFromCart,
  getUserCart,
} = require("../controllers/cart");

const { verifyUser } = require("../middlewear/authMiddlewear");

router.post("/add", verifyUser, addToCart);

router.post("/delete", verifyUser, deleteFromCart);

router.get("/user-cart", verifyUser, getUserCart);

module.exports = router;
