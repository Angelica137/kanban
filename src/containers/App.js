import React, { Component } from "react";
import Header from "../components/Header/Header";
import Column from "../components/Column/Column";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Column />
        <Column />
      </>
    );
  }
}

export default App;
