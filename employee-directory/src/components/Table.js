import React, { Component } from "react";
import API from "../utils/Api";
import "./Table.css";
import Row from "./Row";

class Table extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.employees();
  }

  employees = () => {
    API.getUsers()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">
              Name <i className="fa fa-caret-down"></i>
            </th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          <Row users={this.state.users} />
        </tbody>
      </table>
    );
  }
}

export default Table;
