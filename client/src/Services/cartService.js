import axios from "axios";

const API_URI = "http://localhost:5000/cart";

const getUserCart = async (token) => {
  console.log(token);
  const config = {
    headers: {
      token: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`${API_URI}/user-cart`, config);

  console.log("Response from service ", response);
  return response.data;
};

const cartService = {
  getUserCart,
};

export default cartService;
