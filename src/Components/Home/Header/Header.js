import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import HeaderMain from "../Header-Main/HeaderMain";
import BusinessInfo from "../BusinessInfo/BusinessInfo";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar></Navbar>
      <HeaderMain></HeaderMain>
      <BusinessInfo></BusinessInfo>
    </div>
  );
};

export default Header;
