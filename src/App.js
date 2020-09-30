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
            <Main />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
