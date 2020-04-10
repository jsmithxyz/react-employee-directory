import React, { Component, Fragment } from "react";
import API from "../utils/Api";
import "./Table.css";
import Row from "./Row";
import Search from "./Search";

class Table extends Component {
  state = {
    users: [],
    search: "",
  };

  componentDidMount() {
    this.employees();
  }

  employees = () => {
    API.getUsers()
      .then((res) => this.setState({ users: res.data.results }))
      .catch((err) => console.log(err));
  };

  updateSearch(e) {
    this.setState({ search: e.target.value });
  }

  render() {
    let filteredEmployees = this.state.users.filter((user) => {
      return user.name.last.indexOf(this.state.search) !== -1;
    });

    return (
      <Fragment>
        <Search
          value={this.state.search}
          onChange={this.updateSearch.bind(this)}
        />
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
            <Row filteredEmployees={filteredEmployees} />
          </tbody>
        </table>
      </Fragment>
    );
  }
}

export default Table;
