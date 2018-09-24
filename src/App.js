import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    axios.get("/api/items").then(response => {
      // console.log(response);
      this.setState({ items: response.data });
    });
  }

  render() {
    console.log(this.state.items);
    let myItems =
      this.state.items[1] &&
      this.state.items.map((elem, ind) => {
        return (
          <div key={ind}>
            <h3>{elem.name}</h3>
            <div>${elem.price}</div>
          </div>
        );
      });
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {myItems}
      </div>
    );
  }
}

export default App;
