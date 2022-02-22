import React, { useEffect } from "react";
import {
  getUserCart,
  reset,
  deleteItemFromCart,
} from "../../Redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
import * as Tag from "./cart.style";
import { useNavigate } from "react-router-dom";
import { FaTrash } from "react-icons/fa";

function Cart() {
  function currencyFormat(num) {
    return "$" + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cart, totalPrice, isLoading, isSuccess, isError, message } =
    useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const handleOnClick = (product) => {
    console.log(product);
    dispatch(
      deleteItemFromCart({ productId: product.productId, qty: product.qty })
    );
    dispatch(reset());
  };
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
    if (isError) {
      alert(message);
    }
    if (isSuccess || cart) {
      dispatch(getUserCart());
      dispatch(reset());
    }

    console.log("cart is ", cart);
  }, [dispatch, isLoading]);
  if (isLoading) {
    return <Loader />;
  }

  return (
    <Tag.CartContainer>
      <Tag.LeftSide>
        {/* <Tag.CartProducts> */}
        <Tag.CartTable>
          <Tag.CartTableItem></Tag.CartTableItem>
          <Tag.CartTableItem>Name</Tag.CartTableItem>
          <Tag.CartTableItem>Price</Tag.CartTableItem>
          <Tag.CartTableItem>Qty</Tag.CartTableItem>
          <Tag.CartTableItem></Tag.CartTableItem>
        </Tag.CartTable>
        {cart.map((item) => (
          <Tag.CartProduct key={item._id}>
            <Tag.CartProImage src={item.productImage} />
            <Tag.CartProName>{item.productName}</Tag.CartProName>
            <Tag.CartProPrice>
              {currencyFormat(item.productPrice)}
            </Tag.CartProPrice>
            <Tag.CartProQty>{item.qty}</Tag.CartProQty>
            <Tag.DeleteButton
              onClick={() => {
                handleOnClick(item);
              }}
            >
              <FaTrash />
            </Tag.DeleteButton>
          </Tag.CartProduct>
        ))}

        {/* </Tag.CartProducts> */}
      </Tag.LeftSide>
      <Tag.RightSide>
        <Tag.Summary>
          <Tag.SummaryTitle>Total Amount</Tag.SummaryTitle>
          <Tag.Fieldes>
            <Tag.Fielde>
              <Tag.FieldeData color="#ccc">Products</Tag.FieldeData>
              <Tag.FieldeData>
                {currencyFormat(Number(totalPrice))}
              </Tag.FieldeData>
            </Tag.Fielde>
            <Tag.Fielde>
              <Tag.FieldeData color="#ccc">Shipping costs</Tag.FieldeData>
              <Tag.FieldeData>Free</Tag.FieldeData>
            </Tag.Fielde>
            <Tag.Fielde>
              <Tag.FieldeData color="#ccc">Payment costs</Tag.FieldeData>
              <Tag.FieldeData>Free</Tag.FieldeData>
            </Tag.Fielde>
          </Tag.Fieldes>
          <Tag.Hr></Tag.Hr>
          <Tag.Fielde>
            <Tag.FieldeData color="#ccc">Sub Total</Tag.FieldeData>
            <Tag.FieldeData>
              {currencyFormat(Number(totalPrice))}
            </Tag.FieldeData>
          </Tag.Fielde>
          <Tag.Fielde>
            <Tag.FieldeData>Total</Tag.FieldeData>
            <Tag.FieldeData style={{ fontWeight: "bolder", fontSize: "26px" }}>
              {currencyFormat(Number(totalPrice))}
            </Tag.FieldeData>
          </Tag.Fielde>
          <Tag.PayButton>Pay Now!</Tag.PayButton>
        </Tag.Summary>
      </Tag.RightSide>
    </Tag.CartContainer>
  );
}

export default Cart;
