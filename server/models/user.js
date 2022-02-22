const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  cart: {
    items: [
      {
        productId: {
          type: mongoose.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        productName: {
          type: String,
        },
        productImage: {
          type: String,
        },
        productPrice: {
          type: Number,
        },
        qty: {
          type: Number,
          required: true,
        },
      },
    ],
    totalPrice: { type: Number },
  },
  isAdmin: { type: Boolean, default: false },
});

userSchema.methods.addToCart = function (product) {
  const cart = this.cart;
  const existing = cart.items.findIndex((objectItem) => {
    return (
      new String(objectItem.productId).trim() ===
      new String(product._doc._id).trim()
    );
  });

  if (existing >= 0) {
    cart.items[existing].qty += product.qty;
  } else {
    cart.items.push({
      productId: product._doc._id,
      productImage: product._doc.productImage,
      productPrice: product._doc.productPrice,
      productName: product._doc.productName,
      qty: product.qty,
    });
  }
  if (!cart.totalPrice) {
    cart.totalPrice = 0;
  }
  cart.totalPrice += product._doc.productPrice * product.qty;
  return this.save();
};

userSchema.methods.deleteFromCart = function (product) {
  const cart = this.cart;
  const existing = cart.items.findIndex((objectItem) => {
    return (
      new String(objectItem.productId).trim() ===
      new String(product._doc._id).trim()
    );
  });
  if (existing >= 0) {
    let filterdArr = cart.items.filter((item) => {
      return (
        new String(item.productId).trim() != new String(product._doc._id).trim()
      );
    });
    cart.items = filterdArr;
  }
  cart.totalPrice -= product._doc.productPrice * product.qty;
  // console.log(this);
  return this.save();
};

module.exports = mongoose.model("User", userSchema);
