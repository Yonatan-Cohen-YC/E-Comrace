import React from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import {
  AiOutlineLogin,
  AiFillContacts,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BiShoppingBag, BiUserCheck } from "react-icons/bi";
// import Logo from "../../asstes/images/e-logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../../Redux/features/auth/authSlice";

function Navbar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleOnLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div className="navMainContainer">
      <div className="navbarContainer">
        <div className="navLeft">
          {/* <img src={Logo} alt="logo" /> */}
          <Link className="link" to="/">
            <div className="navLink">
              <FaHome className="iconStyle" />
              <span className="navLinkSpan">Home</span>
            </div>
          </Link>
          <Link className="link" to="/products">
            <div className="navLink">
              <BiShoppingBag className="iconStyle" />
              <span className="navLinkSpan">Products</span>
            </div>
          </Link>
          <Link className="link" to="/contact">
            <div className="navLink">
              <AiFillContacts className="iconStyle" />
              <span className="navLinkSpan">Contact</span>
            </div>
          </Link>
          <Link className="link" to="/cart">
            <div className="navLink">
              <AiOutlineShoppingCart className="iconStyle" />
              <span className="navLinkSpan">Cart</span>
            </div>
          </Link>
        </div>

        <div className="navRight">
          {user ? (
            <div className="navLink" onClick={handleOnLogout}>
              <AiOutlineLogin className="iconStyle" />
              <span className="navLinkSpan">Logout</span>
            </div>
          ) : (
            <React.Fragment>
              <Link className="link" to="/login">
                <div className="navLink">
                  <AiOutlineLogin className="iconStyle" />
                  <span className="navLinkSpan">Login</span>
                </div>
              </Link>
              <Link to="/register" className="link">
                <div className="navLink">
                  <BiUserCheck className="iconStyle" />
                  <span className="navLinkSpan">Register</span>
                </div>
              </Link>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
