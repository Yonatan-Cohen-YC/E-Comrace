import React from "react";
// import { useSelector } from "react-redux";
import * as pages from "./Pages/index";
import Navbar from "./Components/Navbar/navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  // const state = useSelector((state) => state);
  // console.log(state);
  return (
    <React.Fragment>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<pages.Home />} />
          <Route path="/products" element={<pages.Products />} />
          <Route path="/contact" element={<pages.Contact />} />
          <Route path="/cart" element={<pages.Cart />} />
          <Route path="/login" element={<pages.Login />} />
          <Route path="/register" element={<pages.Register />} />
          <Route path="/product/:id" element={<pages.SingleProduct />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
};

export default App;
