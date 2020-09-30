import React, { Component } from "react";
import Header from "./component/MenuTop/Header";
import Main from "./component/Main/main";
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        {" "}
        <div className="App">
          <div>
            <Header />
            <div className="page-options ">
              <div className="logo-random_mode">
                <Link to="/randomnumber">
                  <i className="fas fa-dice"></i>
                </Link>
              </div>
              <div className="logo-random_mode">
                <Link to="/wheelrandom">
                  <i className="fas fa-trophy"> </i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
