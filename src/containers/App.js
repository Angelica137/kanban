import React, { Component } from "react";
import Header from "../components/Header/Header";
import Board from "./Board";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Board />
      </>
    );
  }
}

export default App;
