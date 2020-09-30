import React from "react";
import "../MenuTop/header.scss";
import { Link } from "react-router-dom";

// class RandomNumber extends React.Component {
const RandomNumber = (props) => {
  //   const [collapsed, setCollapsed] = useState(true);

  //   const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="header-navbar_custom">
      <div className="row-custom_navbar">
        <div className="container-custom_navbar">
          <div className="logo-custom">
            <Link to="/">RAmDoM</Link>
          </div>
          <div className="page-options ">
            <Link to="/randomnumber">
              <div className="logo-random_mode">
                <i className="fas fa-dice" />
              </div>
            </Link>
            <Link to="/wheelrandom">
              <div className="logo-random_mode">
                <i className="fas fa-trophy"></i>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RandomNumber;
