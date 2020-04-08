import React, { Component } from 'react';
import Card from "./Card";
import "./Table.css";

class Table extends Component {
    render() {
        return (
            <table className="table table-hover">
  <thead>
    <tr>
      <th scope="col">Image</th>
      <th scope="col">Name</th>
      <th scope="col">Phone</th>
      <th scope="col">Email</th>
      <th scope="col">DOB</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
    
      <Card />
    </tr>
    <tr>
    
      <Card />
    </tr>
  </tbody>
</table>
        )
    }
}

export default Table;