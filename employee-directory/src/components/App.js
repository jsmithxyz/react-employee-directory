import React, { Fragment } from "react";
import Header from "./Header";
import Search from "./Search";
import Container from "./Container";
import Footer from "./Footer";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <Header />
        <Search />
        <Container />
        <Footer />

      </Fragment>
    );
  }
}

export default App;
