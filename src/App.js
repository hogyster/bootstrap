import React, { Component } from "react";
import "./App.scss";
import Navbar from "./Layout/Navbar";
import Leftmenu from "./Layout/Leftmenu";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Leftmenu />
      </div>
    );
  }
}

export default App;
