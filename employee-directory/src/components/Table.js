import React, { Component, Fragment } from "react";
import API from "../utils/Api";
import "./Table.css";
import Row from "./Row";
import Search from "./Search";

class Table extends Component {
  state = {
    users: [],
    search: "",
    sortType: "",
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

  handleToggle = () => {
    if (this.state.sortType === 'desc' || this.state.sortType !== 'asc') {
      this.setState({sortType: 'asc'})
    }
    else if (this.state.sortType === 'asc' || this.state.sortType !== 'desc') {
      this.setState({sortType: 'desc'})
    }
  }
  

  render() {
    let filteredEmployees = this.state.users.filter((user) => {
      return user.name.last.indexOf(this.state.search) !== -1;
    });

    const ascending = (a, b) => {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
  
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison * 1;
    }

    const descending = (a, b) => {
      // Use toUpperCase() to ignore character casing
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
  
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison * -1;
    }

    if (this.state.sortType === 'asc') {
      filteredEmployees.sort(ascending)
    }
    else if(this.state.sortType === 'desc') {
      filteredEmployees.sort(descending)
    }
    

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
                Name <button onClick = {this.handleToggle}><i className="fa fa-caret-down"></i></button>
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
