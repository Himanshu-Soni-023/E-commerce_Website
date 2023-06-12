import React from "react";
import "./Loader.css";
import loaderImg from "../../assets/loader.gif";
import ReactDOM from "react-dom";

// RractDOM so that loader run always what ever is reason, even if it has autheicated quick as possible
// div .loader is also created on index.html
const Loader = () => {
  return ReactDOM.createportal(
    <div className="wrapper">
      <div className="loader">
        <img src={loaderImg} alt="Loading..." />
      </div>
    </div>,
    document.getElementById("loader")
  );
};

export default Loader;
