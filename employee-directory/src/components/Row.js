import React, { Fragment } from "react";
import Moment from "react-moment";

const Row = (props) => {
  return (
    <Fragment>
      {props.users.map((user) => (
        <tr>
          <td>
            <img src={user.picture.thumbnail} alt={user.name.first}></img>
          </td>
          <td>
            {user.name.first} {user.name.last}
          </td>
          <td>{user.cell}</td>
          <td>{user.email}</td>
          <td>
            <Moment format="MM-DD-YYYY">{user.dob.date}</Moment>
          </td>
        </tr>
      ))}
    </Fragment>
  );
}

export default Row;
