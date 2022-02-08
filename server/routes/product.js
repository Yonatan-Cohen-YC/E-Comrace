const {
  getAllProducts,
  addNewProduct,
  getSingleProduct,
  getProductByCtg,
  deleteProduct,
} = require("../controllers/product");

const router = require("express").Router();

router.get("/", getAllProducts);

router.post("/add", addNewProduct);

router.get("/single-product/:id", getSingleProduct);

router.post("/ctg-products", getProductByCtg);

router.post("/delete", deleteProduct);

module.exports = router;
