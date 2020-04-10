import React, { Fragment } from "react";
import Moment from "react-moment";
import "./Row.css";

const Row = ({filteredEmployees}) => {
   
  return (
    <Fragment>
      {filteredEmployees.map((employee) => (
        <tr  key = {filteredEmployees.indexOf(employee)}>
          <td id="align">
            <img src={employee.picture.large} alt={employee.name.first}></img>
          </td>
          <td id="align">
            {employee.name.first} {employee.name.last}
          </td>
          <td id="align">{employee.cell}</td>
          <td id="align">{employee.email}</td>
          <td id="align">
            <Moment format="MM-DD-YYYY">{employee.dob.date}</Moment>
          </td>
        </tr> 
  
      ))}
    </Fragment>
  );
}

export default Row;
