import React, { Component } from "react";
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Employee Directory</h1>
          <p className="lead">
            Click on carrot by Name to sort or use Search below to narrow your results
          </p>
        </div>
      </div>
    );
  }
}

export default Header;
