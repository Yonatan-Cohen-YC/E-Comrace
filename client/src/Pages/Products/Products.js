import { useState, useEffect } from "react";
import Product from "../../Components/Product/product";
import * as Tag from "./products.style";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductsByCtg,
  reset,
} from "../../Redux/features/productsByCtg/productsByCtg";
import Loader from "../../Components/Loader/Loader";

function Products() {
  const [category, setCategory] = useState("TVS");

  const dispatch = useDispatch();
  const { products, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.productsByCtg
  );
  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess || products) {
    }
    dispatch(getProductsByCtg(category));
    dispatch(reset());
  }, [dispatch, category]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Tag.ProductsContainer>
      <Tag.ListBox>
        <Tag.ListTitle>Products</Tag.ListTitle>
        <Tag.List>
          <Tag.CtgButton onClick={(e) => setCategory(e.target.name)} name="TVS">
            TVS
          </Tag.CtgButton>
          <Tag.CtgButton
            onClick={(e) => setCategory(e.target.name)}
            name="SMARTPHONES"
          >
            SMARTPHONES
          </Tag.CtgButton>
          <Tag.CtgButton
            onClick={(e) => setCategory(e.target.name)}
            name="WATCHES"
          >
            WATCHES
          </Tag.CtgButton>
          <Tag.CtgButton
            onClick={(e) => setCategory(e.target.name)}
            name="LAPTOPS"
          >
            LAPTOPS
          </Tag.CtgButton>
        </Tag.List>
      </Tag.ListBox>
      <Tag.Products>
        <Tag.ProductsCtgTitle>{category}</Tag.ProductsCtgTitle>
        <Tag.ProductsHolder>
          {products.map((product) => (
            <Product product={product} key={product._id} />
          ))}
        </Tag.ProductsHolder>
      </Tag.Products>
    </Tag.ProductsContainer>
  );
}

export default Products;
