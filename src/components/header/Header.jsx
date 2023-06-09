import React from "react";
import "./Header.css";
import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart, FaTimes } from "react-icons/fa";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { useState } from "react";

const logo = (
  <div className="logo">
    <Link to="/">
      <h2>
        e<span>Shop</span>.
      </h2>
    </Link>
  </div>
);

const cart = (
  <span className="cart">
    <Link to="/cart">
      cart <FaShoppingCart size={20} />
      <p>0</p>
    </Link>
  </span>
);
const activelink = ({ isActive }) => (isActive ? "active" : "");

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const hideMenu = () => {
    setShowMenu(false);
  };
  return (
    <header>
      <div className="header">
        {logo}
        <nav className={showMenu ? "show-nav" : "hide-nav"}>
          <div
            className={
              showMenu ? "nav-wrapper show-nav-wrapper" : "nav-wrapper"
            }
            onClick={hideMenu}
          >
            {" "}
          </div>

          <ul onClick={hideMenu}>
            <li className="logo-mobile">
              {logo}
              <FaTimes size={22} color="white" onClick={hideMenu} />
            </li>
            <li>
              <NavLink to="/" className={activelink}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={activelink}>
                Contact Us
              </NavLink>
            </li>
          </ul>
          <div onClick={hideMenu} className="header-right">
            <span className="links">
              <NavLink to="/login" className={activelink}>
                Login
              </NavLink>
              <NavLink to="/register" className={activelink}>
                Register
              </NavLink>
              <NavLink to="/order-history" className={activelink}>
                My Orders
              </NavLink>
            </span>
            {cart}
          </div>
        </nav>

        <div className="menu-icon">
          {cart}
          <HiOutlineMenuAlt3 size={28} onClick={toggleMenu} />
        </div>
      </div>
    </header>
  );
};

export default Header;
