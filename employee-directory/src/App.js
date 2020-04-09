import React, { Fragment } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search 
          handleInputChange = {this.handleInputChange}
        />
        <Table />
        <Footer />

      </Fragment>
    );
  }
}

export default App;
