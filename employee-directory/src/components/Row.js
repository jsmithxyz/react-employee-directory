import React, { Fragment } from "react";
import Moment from "react-moment";

const Row = ({ filteredEmployees }) => {
  return (
    <Fragment>
      {filteredEmployees.map((employee) => (
        <tr key={filteredEmployees.indexOf(employee)}>
          <td>
            <img
              src={employee.picture.thumbnail}
              alt={employee.name.first}
            ></img>
          </td>
          <td>
            {employee.name.first} {employee.name.last}
          </td>
          <td>{employee.cell}</td>
          <td>{employee.email}</td>
          <td>
            <Moment format="MM-DD-YYYY">{employee.dob.date}</Moment>
          </td>
        </tr>
      ))}
    </Fragment>
  );
};

export default Row;
