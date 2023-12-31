import React, { useState } from "react";
import "./NavbarStyle.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [collapse, setCollapse] = useState("navbar_ul");

  // const handleMenuClick = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const onToggle = () => {
    collapse === "navbar_ul"
      ? setCollapse("navbar_ul collapse")
      : setCollapse("navbar_ul");
    setIsMenuOpen(!isMenuOpen); // Toggle the isMenuOpen state
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="logo" />
      <ul className={collapse}>
        <li className="active">Contact</li>
        <li className="active">About</li>
        <li className="active">Shop</li>
      </ul>
      <div className="mobile" onClick={onToggle}>
        {isMenuOpen ? (
          <i className="fas fa-times"></i>
        ) : (
          <i className="fas fa-bars"></i>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
