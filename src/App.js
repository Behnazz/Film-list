import React, { Component } from "react";
import "./App.css";
import Movies from "./Components/Movies";
class App extends Component {
  render() {
    return (
      <div className="App">
        <main className="container" />
        <Movies />
      </div>
    );
  }
}

export default App;
