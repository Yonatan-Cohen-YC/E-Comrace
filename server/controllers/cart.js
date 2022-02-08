const product = require("../models/product");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const addToCart = async (req, res) => {
  console.log("Token from add");
  const token = req.headers.token.split(" ")[1];
  const response = jwt.verify(token, process.env.JWT_SEC);
  const user = await User.findById(response.id);
  await product
    .findById(req.body.productId)
    .then((product) => {
      const qty = req.body.qty;
      const toSend = { ...product, qty };
      user.addToCart(toSend);
      res.status(200).send(`${product.productName} Added to your cart`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteFromCart = async (req, res) => {
  const token = req.headers.token.split(" ")[1];
  const response = jwt.verify(token, process.env.JWT_SEC);
  const user = await User.findById(response.id);

  await product.findById(req.body.productId).then((product) => {
    user.deleteFromCart(product);
    res.status(200).send(`${product.productName} deleted from your cart`);
  });
};

module.exports = { addToCart, deleteFromCart };
