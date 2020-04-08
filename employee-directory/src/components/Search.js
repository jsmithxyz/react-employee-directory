import React, { Component, Fragment } from "react";

import "./Search.css"

class Search extends Component {
  render() {
    return (
        <Fragment>
      <div className="input-group input-group-mb3">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
      <div className="button-div">
        <button className="btn btn-primary" type="submit"><i className="fas fa-search"></i></button>
      </div>
        </Fragment>
    );
  }
}

export default Search;
