import axios from "axios";

const API_URI = "http://localhost:5000/products";

const getAllProducts = async () => {
  const response = await axios.get(API_URI);
  return response.data;
};

const getElementById = async (id) => {
  const response = await axios.get(`${API_URI}/${id}`);

  return response.data;
};

const productsService = {
  getAllProducts,
  getElementById,
};

export default productsService;
