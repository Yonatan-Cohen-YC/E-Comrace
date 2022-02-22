import { useParams } from "react-router-dom";
import * as Tag from "./singleProduct.style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductById,
  reset,
} from "../../Redux/features/singleProduct/singleProduct";
import {
  addItemToCart,
  getUserCart,
  reset as cartReset,
} from "../../Redux/features/cart/cartSlice";
import Loader from "../../Components/Loader/Loader";

function SingleProduct(props) {
  const [value, setValue] = useState(1);

  const dispatch = useDispatch();
  const { product, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.singleProduct
  );
  const { id } = useParams();
  useEffect(() => {
    if (isError) {
      alert(message);
    }
    if (isSuccess || product) {
    }
    dispatch(getProductById(id));
    dispatch(reset());
  }, [dispatch]);

  const handleOnClick = (product) => {
    dispatch(addItemToCart({ productId: product._id, qty: value }));
    dispatch(cartReset());
    console.log(product);
  };

  if (isLoading) {
    return <Loader />;
  }
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  return (
    <Tag.Container>
      <Tag.SingleProduct>
        <Tag.Singleleft background={product.productImage}>
          {/* <Tag.SingleImage src={product.productImage} /> */}
          {/* <div>{product.productName}</div>
          <div>{product.productCategory}</div> */}
        </Tag.Singleleft>
        <Tag.SingleRight>
          <Tag.SingleProductName>{product.productName}</Tag.SingleProductName>
          <Tag.SingleProductCtg>{product.productCategory}</Tag.SingleProductCtg>
          <Tag.ProductDetails>
            Lorem ipsPum dolor sit amet consectetur adipisicing elit. Enim, est
            deleniti impedit necessitatibus illum tempora deserunt libero
            dolores maiores ullam!
          </Tag.ProductDetails>
          <Tag.QunContainer>
            <Tag.AmountContainer>
              <Tag.ValueButton
                onClick={() => (value > 1 ? setValue(value - 1) : value)}
              >
                -
              </Tag.ValueButton>
              <Tag.ValueInput type="number">{value}</Tag.ValueInput>
              <Tag.ValueButton
                onClick={() => (value < 10 ? setValue(value + 1) : value)}
              >
                +
              </Tag.ValueButton>
            </Tag.AmountContainer>
            <Tag.PriceContainer>
              <Tag.Price>
                {currencyFormat(Number(product.productPrice * value))}
              </Tag.Price>
            </Tag.PriceContainer>
          </Tag.QunContainer>
          <Tag.AddToCartButton onClick={() => handleOnClick(product)}>
            Add to cart
          </Tag.AddToCartButton>
        </Tag.SingleRight>
      </Tag.SingleProduct>
    </Tag.Container>
  );
}

export default SingleProduct;
