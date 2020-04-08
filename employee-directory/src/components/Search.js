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
          placeholder= "Search by Name"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
        />
      </div>
        </Fragment>
    );
  }
}

export default Search;
