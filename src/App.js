import React, { Component } from 'react';
import Todos from "./Components/Todos"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello I am Working</h1>
        <Todos />
      </div>
    );
  }
}

export default App;
