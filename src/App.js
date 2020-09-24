import React, { Component } from "react";
import Header from "./component/MenuTop/Header";
import Main from "./component/Main/main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Header />
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
