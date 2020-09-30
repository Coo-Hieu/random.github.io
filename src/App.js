import React, { Component } from "react";
import Header from "./component/MenuTop/Header";
import Main from "./component/Main/main";
import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div>
            <Header />
            <Main />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
