import React, { useEffect } from "react";
import { getUserCart, reset } from "../../Redux/features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader/Loader";
function Cart() {
  const dispatch = useDispatch();
  const { cart, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.cart
  );
  const user = useSelector((state) => state.auth.user);
  useEffect(() => {
    if (!user) {
      window.location = "/";
    }
    if (isError) {
      alert(message);
    }
    if (isSuccess || cart) {
      dispatch(getUserCart());
      dispatch(reset());
    }
    console.log("cart is ", cart);
  }, [dispatch]);
  if (isLoading) {
    return <Loader />;
  }
  return <div>{cart.map((item) => item.qty)}</div>;
}

export default Cart;
