const Product = require("../models/product");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Cart = require("../models/cart");

//Add To Cart
// const addToCart = async (req, res) => {
//   console.log(req.body);
//   try {
//     const newCartItem = await Cart.create({
//       productId: req.body.productId,
//       qty: req.body.qty,
//       user: req.user.id,
//     });

//     res.status(200).send(newCartItem);
//   } catch (error) {
//     console.log(error);

//     res.status(500).send({ Erroror: error });
//   }
// };

// const getUserCart = async (req, res) => {
//   const cart = await Cart.find({ user: req.user.id });

//   res.send(cart);
//   let products = [];

//   cart.map(async (item) => {
//     let items = await Product.find({ _id: item.productId });
//     products.push(items);
//   });
//   console.log("Products : ", products);
//   // const product = await Product;
// };

const addToCart = async (req, res) => {
  console.log("Token from add");
  const user = await User.findById(req.user.id);
  await Product.findById(req.body.productId)
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
  const user = await User.findById(req.user.id);

  await Product.findById(req.body.productId).then((product) => {
    const qty = req.body.qty;
    const toSend = { ...product, qty };
    user.deleteFromCart(toSend);
    res.status(200).send(user.cart);
  });
};

const getUserCart = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    res.send(user.cart);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = { addToCart, deleteFromCart, getUserCart };
