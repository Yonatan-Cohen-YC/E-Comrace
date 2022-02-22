import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Tag from "./navbar.style";
import { useSelector, useDispatch } from "react-redux";
import { reset, logout } from "../../Redux/features/auth/authSlice";
import { FaHome } from "react-icons/fa";
import { BiShoppingBag, BiUserCheck } from "react-icons/bi";
import {
  AiOutlineLogin,
  AiFillContacts,
  AiOutlineShoppingCart,
} from "react-icons/ai";

function Navbar() {
  const [navStatus, setNavStatus] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //Navbar Resize Function
  const navbarSize = () => {
    if (window.scrollY >= 80) {
      setNavStatus(true);
    } else {
      setNavStatus(false);
    }
  };

  //Logout
  const handleOnLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  window.addEventListener("scroll", navbarSize);

  return (
    <Tag.NavMainContainer>
      <Tag.NavbarContainer fullSize={navStatus}>
        <Tag.NavLeft>
          <Link className="link" to="/">
            <Tag.NavLink>
              <FaHome className="iconStyle" />
              <Tag.NavLinkSpan>Home</Tag.NavLinkSpan>
            </Tag.NavLink>
          </Link>
          <Link className="link" to="/products">
            <Tag.NavLink>
              <BiShoppingBag className="iconStyle" />
              <Tag.NavLinkSpan>Products</Tag.NavLinkSpan>
            </Tag.NavLink>
          </Link>
          <Link className="link" to="/contact">
            <Tag.NavLink>
              <AiFillContacts className="iconStyle" />
              <Tag.NavLinkSpan>Contact</Tag.NavLinkSpan>
            </Tag.NavLink>
          </Link>
          <Link className="link" to="/cart">
            <Tag.NavLink>
              <AiOutlineShoppingCart className="iconStyle" />
              <Tag.NavLinkSpan>Cart</Tag.NavLinkSpan>
            </Tag.NavLink>
          </Link>
        </Tag.NavLeft>
        <Tag.NavRight>
          {user ? (
            <Tag.NavLink onClick={handleOnLogout}>
              <AiOutlineLogin className="iconStyle" />
              <Tag.NavLinkSpan>Logout</Tag.NavLinkSpan>
            </Tag.NavLink>
          ) : (
            <React.Fragment>
              <Link className="link" to="/login">
                <Tag.NavLink>
                  <AiOutlineLogin className="iconStyle" />
                  <Tag.NavLinkSpan>Login</Tag.NavLinkSpan>
                </Tag.NavLink>
              </Link>
              <Link to="/register" className="link">
                <Tag.NavLink>
                  <BiUserCheck className="iconStyle" />
                  <Tag.NavLinkSpan>Register</Tag.NavLinkSpan>
                </Tag.NavLink>
              </Link>
            </React.Fragment>
          )}
        </Tag.NavRight>
      </Tag.NavbarContainer>
    </Tag.NavMainContainer>
  );
}

export default Navbar;
