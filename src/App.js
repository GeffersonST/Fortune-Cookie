import React, { Component } from "react";
import logo from "./assets/biscoito.png";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <img src={logo} alt="" className="img" alt="" />
      </div>
    );
  }
}
export default App;
