import React, { Fragment } from "react";
import Header from "./Header";
import Search from "./Search";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search />
      </Fragment>
    );
  }
}

export default App;
