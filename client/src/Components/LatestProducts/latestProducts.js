import * as S from "./latestProductsStyle";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProducts,
  reset,
} from "../../Redux/features/products/productsSlice";
import Loader from "../Loader/Loader";
import Product from "../Product/product";

function LatesProducts() {
  const dispatch = useDispatch();
  const { products, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess || products) {
    }
    dispatch(getProducts());
    dispatch(reset());
  }, [dispatch]);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <S.LatestProductsContainer>
      {products.map((product) => (
        <Product product={product} key={product._id} />
        // <div>{product.productName}</div>
      ))}
    </S.LatestProductsContainer>
  );
}

export default LatesProducts;
