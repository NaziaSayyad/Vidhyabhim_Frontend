import React from "react";
import "./Navbar.css";
import { FaBars, FaCommentDots, FaBell, FaExpand } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <button className="menu-btn">
          <FaBars />
        </button>
        <a href="#">Home</a>
        <a href="#">Contact</a>
      </div>

      <div className="navbar-right">
        <div className="icon-container">
          <FaCommentDots className="icon" />
          <span className="badge red">0</span>
        </div>
        <div className="icon-container">
          <FaBell className="icon" />
          <span className="badge yellow">0</span>
        </div>
        <FaExpand className="icon expand" />
        <button className="logout-btn">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;
