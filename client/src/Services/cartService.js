import axios from "axios";

const API_URI = "http://localhost:5000/cart";

const getUserCart = async (token) => {
  const config = {
    headers: {
      token: `Bearer ${token}`,
    },
  };
  console.log(token);

  const response = await axios.get(`${API_URI}/user-cart`, config);
  console.log("Response from service ", response);

  return response.data;
};

const addItemToCart = async (productId, token) => {
  const config = {
    headers: {
      token: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URI}/add`, productId, config);

  // console.log("Response from service ", response);
  return response.data;
};

const deleteItemFromCart = async (productId, token) => {
  const config = {
    headers: {
      token: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${API_URI}/delete`, productId, config);

  // console.log("Response from service ", response);
  return response.data;
};

const cartService = {
  getUserCart,
  addItemToCart,
  deleteItemFromCart,
};

export default cartService;
