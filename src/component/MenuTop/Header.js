import React, { useState } from "react";
import "../MenuTop/header.scss";
import { BrowserRouter as Link } from "react-router-dom";

// class RandomNumber extends React.Component {
const RandomNumber = (props) => {
  //   const [collapsed, setCollapsed] = useState(true);

  //   const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header-navbar_custom">
      <div className="row-custom_navbar">
        <div className="container-custom_navbar">
          <div className="logo-custom">
            <a href="/">RAmDoM</a>
          </div>
          <div className="page-options ">
            <div className="logo-random_mode">
              <Link to="/randomnumber">
                <i class="fas fa-dice"></i>
              </Link>
            </div>

            <div className="logo-random_mode">
              <i class="fas fa-trophy"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomNumber;
