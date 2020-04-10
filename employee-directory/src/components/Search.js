import React from "react";
import "./Search.css"


const Search = ({value, onChange}) => {

    return (
       
      <div className="input-group input-group-mb3">
        <input
          type="text"
          className="form-control"
          placeholder= "Search by Last Name"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          value = {value}
          onChange = {onChange}
        />
      </div>
     
    );
  }


export default Search;
