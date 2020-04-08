import React, { Fragment } from "react";
import Header from "./Header";
import Search from "./Search";
import Table from "./Table";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search />
        <Table />
        <Footer />

      </Fragment>
    );
  }
}

export default App;
