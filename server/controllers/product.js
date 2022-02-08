const Product = require("../models/product");

//Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

//Get a single product
const getSingleProduct = async (req, res) => {
  try {
    const singleProduct = await Product.findById(req.params.id);
    res.status(200).send(singleProduct);
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
  console.log(req.params);
};

//Get products by Category
const getProductByCtg = async (req, res) => {
  try {
    const products = await Product.find({
      productCategory: req.body.productCategory,
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

//Add new product
const addNewProduct = async (req, res) => {
  try {
    await new Product({ ...req.body }).save();
    res.status(201).send(`product ${req.body.productName} added succesfully`);
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

//Delete product
const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.body._id);
    res.status(200).send("ProductDeleted");
  } catch (error) {
    res.status(500).send({ msg: `Server error, ${error}` });
  }
};

module.exports = {
  getAllProducts,
  getSingleProduct,
  addNewProduct,
  getProductByCtg,
  deleteProduct,
};
