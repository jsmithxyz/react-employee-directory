import React, { Component, Fragment } from "react";
import "./Search.css"

class Search extends Component {

handleInputChange = event => {
        this.setState({ users: event.target.value });
      };

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
          onChange={this.handleInputChange}
        />
      </div>
        </Fragment>
    );
  }
}

export default Search;
