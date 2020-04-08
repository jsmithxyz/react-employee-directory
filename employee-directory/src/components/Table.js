import React, { Component } from 'react';
import "./Table.css";

class Table extends Component {
    render() {
        return (
            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Image </th>
      <th scope="col">Name <i className="fa fa-caret-down"></i></th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Image</td>
      <td>Jordan</td>
      <td>Smith</td>
      <td>jordan.smith@gmail.com</td>
      <td>11-10-1989</td>
    </tr>
    <tr>
      <td>Image</td>
      <td>Patricia</td>
      <td>Johnson</td>
      <td>patricia.johnson@gmail.com</td>
      <td>11-10-1989</td>
    </tr>
    <tr>
      <td>Image</td>
      <td>Marky</td>
      <td>Mark</td>
      <td>Marky.Mark@gmail.com</td>
      <td>11-10-1989</td>
    </tr>
  </tbody>
</table>
        )
    }
}

export default Table;