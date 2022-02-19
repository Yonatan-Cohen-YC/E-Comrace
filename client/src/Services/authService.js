import axios from "axios";

const API_URI = "http://localhost:5000/users";

// Register
const reigtser = async (user) => {
  const response = await axios.post(`${API_URI}/register`, user);

  if (response.data) {
    localStorage.setItem("USER", JSON.stringify(response.data));
  }

  return response.data;
};
// Login
const login = async (user) => {
  const response = await axios.post(`${API_URI}/login`, user);

  if (response.data) {
    localStorage.setItem("USER", JSON.stringify(response.data));
  }

  return response.data;
};
//Logout
const logout = async () => {
  localStorage.removeItem("USER");
};
const authService = {
  reigtser,
  login,
  logout,
};
export default authService;
