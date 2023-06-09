import React from "react";
import "./Footer.css";

const date = new Date();
const year = date.getFullYear();
const Footer = () => {
  return <div className="footer">&copy; {year} All Right Reseved</div>;
};

export default Footer;
